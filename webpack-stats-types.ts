export interface WebpackStats {
  hash: string;
  version: string;
  time: null;
  publicPath: string;
  outputPath: string;
  assetsByChunkName: WebpackStatsAssetsByChunkName;
  assets: WebpackStatsAsset[];
  chunks: WebpackStatsChunk[];
  modules: WebpackStatsModule[];
  entrypoints: WebpackStatsEntrypoints;
  namedChunkGroups: WebpackStatsEntrypoints;
  errors: any[];
  errorsCount: number;
  warnings: any[];
  warningsCount: number;
  children: Child[];
}

export interface WebpackStatsAsset {
  type: AssetType;
  name: string;
  size: number;
  emitted: boolean;
  comparedForEmit: boolean;
  cached: boolean;
  info: AssetInfo;
  chunkNames: Name[];
  chunkIdHints: string[];
  auxiliaryChunkNames: any[];
  auxiliaryChunkIdHints: any[];
  filteredRelated: number;
  related: RelatedElement[];
  chunks: ID[];
  auxiliaryChunks: any[];
  isOverSizeLimit: boolean;
}

export enum Name {
  Main = "main",
  MiniCSSExtractPlugin = "mini-css-extract-plugin",
  PreactFrameworkExample = "preactFrameworkExample",
}

export enum ID {
  Main = "main",
  NodeModulesPreactHooksDistHooksModuleJS41170 = "node_modules_preact_hooks_dist_hooks_module_js-_41170",
  NodeModulesPreactHooksDistHooksModuleJS41171 = "node_modules_preact_hooks_dist_hooks_module_js-_41171",
  PreactFrameworkExample = "preactFrameworkExample",
  SrcCoreClientRenderTsx = "src_core_client-render_tsx",
  SrcRoutesAboutTsx = "src_routes_About_tsx",
  SrcRoutesHomeTsx = "src_routes_Home_tsx",
  VendorsNodeModulesPreactDistPreactModuleJS = "vendors-node_modules_preact_dist_preact_module_js",
  VendorsNodeModulesUniversalRouterSyncModuleJS = "vendors-node_modules_universal-router_sync_module_js",
  WebpackSharingConsumeDefaultPreactPreact3081 = "webpack_sharing_consume_default_preact_preact-_3081",
  WebpackSharingConsumeDefaultPreactPreactF9Bf = "webpack_sharing_consume_default_preact_preact-_f9bf",
}

export interface AssetInfo {
  javascriptModule?: boolean;
  related: InfoRelated;
}

export interface InfoRelated {
  sourceMap: string;
}

export interface RelatedElement {
  type: RelatedType;
  name: string;
  size: number;
  emitted: boolean;
  comparedForEmit: boolean;
  cached: boolean;
  info: RelatedInfo;
  chunkNames: any[];
  chunkIdHints: any[];
  auxiliaryChunkNames: Name[];
  auxiliaryChunkIdHints: string[];
  related: AssetsByChunkName;
  chunks: any[];
  auxiliaryChunks: ID[];
  isOverSizeLimit: boolean;
}

export interface RelatedInfo {
  development: boolean;
}

export interface AssetsByChunkName {}

export enum RelatedType {
  SourceMap = "sourceMap",
}

export enum AssetType {
  Asset = "asset",
}

export interface WebpackStatsAssetsByChunkName {
  preactFrameworkExample: string[];
  main: string[];
}

export interface Child {
  name: string;
  hash: string;
  version: string;
  time: number;
  builtAt: number;
  publicPath: string;
  outputPath: string;
  assetsByChunkName: AssetsByChunkName;
  assets: any[];
  chunks: ChildChunk[];
  modules: ChildModule[];
  entrypoints: ChildEntrypoints;
  namedChunkGroups: ChildEntrypoints;
  errors: any[];
  errorsCount: number;
  warnings: any[];
  warningsCount: number;
  children: any[];
}

export interface ChildChunk {
  rendered: boolean;
  initial: boolean;
  entry: boolean;
  recorded: boolean;
  size: number;
  sizes: PurpleSizes;
  names: Name[];
  idHints: any[];
  runtime: Name[];
  files: any[];
  auxiliaryFiles: any[];
  hash: string;
  childrenByOrder: AssetsByChunkName;
  id: Name;
  siblings: any[];
  parents: any[];
  children: any[];
  modules: ChildModule[];
  origins: Origin[];
}

export interface ChildModule {
  type: ModuleType;
  moduleType: ModuleTypeEnum;
  size: number;
  sizes: PurpleSizes;
  built: boolean;
  codeGenerated: boolean;
  cached: boolean;
  identifier: string;
  name: string;
  nameForCondition: null | string;
  index: number | null;
  preOrderIndex: number | null;
  index2: number | null;
  postOrderIndex: number | null;
  cacheable?: boolean;
  optional: boolean;
  orphan: boolean;
  dependent?: boolean;
  issuer?: null | string;
  issuerName?: null | string;
  issuerPath?: IssuerPath[] | null;
  failed: boolean;
  errors: number;
  warnings: number;
  id: string;
  issuerId?: null | string;
  chunks: Name[];
  assets: any[];
  reasons: Reason[];
  usedExports: null;
  providedExports: string[] | null;
  optimizationBailout: OptimizationBailout[];
  depth: number | null;
}

export interface IssuerPath {
  identifier: string;
  name: string;
  id: string;
}

export enum ModuleTypeEnum {
  CSSMiniExtract = "css/mini-extract",
  ConsumeSharedModule = "consume-shared-module",
  JavascriptAuto = "javascript/auto",
  JavascriptDynamic = "javascript/dynamic",
  ProvideModule = "provide-module",
  Runtime = "runtime",
}

export enum OptimizationBailout {
  CommonJSBailoutModuleExportsIsUsedDirectlyAt15014 = "CommonJS bailout: module.exports is used directly at 15:0-14",
  CommonJSBailoutModuleExportsIsUsedDirectlyAt9014 = "CommonJS bailout: module.exports is used directly at 9:0-14",
}

export interface Reason {
  moduleIdentifier: null | string;
  module: null | string;
  moduleName: null | string;
  resolvedModuleIdentifier: null | string;
  resolvedModule: null | string;
  type: ReasonType | null;
  active: boolean;
  explanation: Explanation;
  userRequest: null | string;
  loc?: string;
  moduleId: null | string;
  resolvedModuleId: null | string;
}

export enum Explanation {
  Empty = "",
  UsedAsLibraryExport = "used as library export",
}

export enum ReasonType {
  CjsSelfExportsReference = "cjs self exports reference",
  ConsumeSharedFallback = "consume shared fallback",
  ContainerEntry = "container entry",
  ContainerExposed = "container exposed",
  Entry = "entry",
  HarmonyImportSpecifier = "harmony import specifier",
  HarmonySideEffectEvaluation = "harmony side effect evaluation",
  Import = "import()",
  ProvideModuleForShared = "provide module for shared",
  ProvideSharedModule = "provide shared module",
  Unknown = "unknown",
}

export interface PurpleSizes {
  javascript?: number;
  runtime?: number;
}

export enum ModuleType {
  Module = "module",
}

export interface Origin {
  module: string;
  moduleIdentifier: string;
  moduleName: string;
  loc: string;
  request?: string;
  moduleId?: string;
}

export interface ChildEntrypoints {
  "mini-css-extract-plugin": Main;
}

export interface Main {
  name: Name;
  chunks: Name[];
  assets: AuxiliaryAssetElement[];
  filteredAssets: number;
  assetsSize: number | null;
  auxiliaryAssets: AuxiliaryAssetElement[];
  filteredAuxiliaryAssets: number;
  auxiliaryAssetsSize: number | null;
  children: AssetsByChunkName;
  childAssets: AssetsByChunkName;
  isOverSizeLimit: boolean;
}

export interface AuxiliaryAssetElement {
  name: string;
}

export interface WebpackStatsChunk {
  rendered: boolean;
  initial: boolean;
  entry: boolean;
  recorded: boolean;
  size: number;
  sizes: FluffySizes;
  names: Name[];
  idHints: string[];
  runtime: Name[];
  files: string[];
  auxiliaryFiles: string[];
  hash: string;
  childrenByOrder: AssetsByChunkName;
  id: ID;
  siblings: ID[];
  parents: ID[];
  children: ID[];
  modules: WebpackStatsModule[];
  origins: Origin[];
  reason?: string;
}

export interface WebpackStatsModule {
  type: ModuleType;
  moduleType: ModuleTypeEnum;
  size: number;
  sizes: FluffySizes;
  built: boolean;
  codeGenerated: boolean;
  cached: boolean;
  identifier: string;
  name: string;
  nameForCondition: null | string;
  index: number | null;
  preOrderIndex: number | null;
  index2: number | null;
  postOrderIndex: number | null;
  cacheable?: boolean;
  optional: boolean;
  orphan: boolean;
  dependent?: boolean;
  issuer?: null | string;
  issuerName?: null | string;
  issuerPath?: IssuerPath[] | null;
  failed: boolean;
  errors: number;
  warnings: number;
  id: null | string;
  issuerId?: null | string;
  chunks: ID[];
  assets: any[];
  reasons: Reason[];
  usedExports: null;
  providedExports: string[] | null;
  optimizationBailout: string[];
  depth: number | null;
}

export interface FluffySizes {
  javascript?: number;
  "share-init"?: number;
  runtime?: number;
  "consume-shared"?: number;
  "css/mini-extract"?: number;
}

export interface WebpackStatsEntrypoints {
  preactFrameworkExample: Main;
  main: Main;
}
