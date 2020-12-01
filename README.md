# webpack-federated-stats-plugin

This plugin will ingest the webpack stats object, process / transform the object and write out relevant federation stats to a file for further consumption.

The most common use case is building a hashed bundle and wanting to programmatically refer to the correct bundle path in your Node.js server.

## Install

```bash
> npm i --save-dev webpack-federated-stats-plugin
```

## Usage

```javascript
const FederatedStatsPlugin = require("webpack-federated-stats-plugin");

module.exports = {
  plugins: [
    new FederatedStatsPlugin({
      filename: "federation-stats.json",
    }),
  ],
};
```

## Example Output

```json
{
  "remote": "abtests",
  "exposes": {
    "./AppShell": ["src_components_app-shell_js.js"]
  }
}
```
