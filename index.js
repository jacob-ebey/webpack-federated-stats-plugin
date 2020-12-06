const webpack = require("webpack");

const PLUGIN_NAME = "FederationStatsPlugin";

/**
 * @typedef {object} FederationStatsPluginOptions
 * @property {string} filename The filename in the `output.path` directory to write stats to.
 */

/**
 * Writes relevant federation stats to a file for further consumption.
 */
class FederationStatsPlugin {
  /**
   *
   * @param {FederationStatsPluginOptions} options
   */
  constructor(options) {
    if (!options || !options.filename) {
      throw new Error("filename option is required.");
    }

    this._options = options;
  }

  /**
   *
   * @param {import("webpack").Compiler} compiler
   */
  apply(compiler) {
    const federationPlugin =
      compiler.options.plugins &&
      compiler.options.plugins.find(
        (plugin) => plugin.constructor.name === "ModuleFederationPlugin"
      );

    if (!federationPlugin) {
      throw new Error("No ModuleFederationPlugin found.");
    }

    const exposedFiles = new Map(
      Object.entries(federationPlugin._options.exposes).map(([k, v]) => [v, k])
    );

    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
      compilation.hooks.processAssets.tapPromise(
        {
          name: PLUGIN_NAME,
          stage: compilation.constructor.PROCESS_ASSETS_STAGE_REPORT,
        },
        async () => {
          const stats = compilation.getStats().toJson({});

          const modules = stats.modules.filter(
            (mod) =>
              mod.name.startsWith("consume shared module") &&
              exposedFiles.has(mod.issuerName)
          );

          const chunks = modules.map((mod) => {
            const exposedAs = exposedFiles.get(mod.issuerName);
            const chunks = mod.chunks.map((chunkId) =>
              stats.chunks.find((chunk) => chunk.id === chunkId)
            );

            return {
              mod: exposedAs,
              chunks: chunks.reduce((p, c) => {
                c.siblings.forEach((s) => {
                  const chunk = stats.chunks.find((c) => c.id === s);
                  const isShared = chunk.modules.some(
                    (m) => m.moduleType === "consume-shared-module"
                  );

                  if (!isShared) {
                    chunk.files.forEach((f) => p.push(f));
                  }
                });
                c.files.forEach((f) => p.push(f));
                return p;
              }, []),
            };
          });

          const exposes = chunks.reduce(
            (p, c) => Object.assign(p, { [c.mod]: c.chunks }),
            {}
          );

          const remote =
            (federationPlugin._options.library &&
              federationPlugin._options.library.name) ||
            federationPlugin._options.name;

          const statsResult = {
            remote,
            exposes,
          };

          const statsJson = JSON.stringify(statsResult);
          const statsBuffer = Buffer.from(statsJson, "utf-8");
          const statsSource = {
            source: () => statsBuffer,
            size: () => statsBuffer.length,
          };

          const filename = this._options.filename;

          const asset = compilation.getAsset(filename);
          if (asset) {
            compilation.updateAsset(filename, statsSource);
          } else {
            compilation.emitAsset(filename, statsSource);
          }
        }
      );
    });
  }
}

module.exports = FederationStatsPlugin;
