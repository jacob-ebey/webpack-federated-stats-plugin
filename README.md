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
  "sharedModules": [
    {
      "chunks": [
        "http://localhost:5000/client-bundle/node_modules_preact_hooks_dist_hooks_module_js-_41171.js"
      ],
      "provides": [
        {
          "shareScope": "default",
          "shareKey": "preact/hooks",
          "requiredVersion": "^10.5.7",
          "strictVersion": true,
          "singleton": false,
          "eager": false
        }
      ]
    },
    {
      "chunks": [
        "http://localhost:5000/client-bundle/vendors-node_modules_preact_dist_preact_module_js.js"
      ],
      "provides": [
        {
          "shareScope": "default",
          "shareKey": "preact",
          "requiredVersion": "^10.5.7",
          "strictVersion": true,
          "singleton": false,
          "eager": false
        }
      ]
    },
    {
      "chunks": [
        "http://localhost:5000/client-bundle/vendors-node_modules_universal-router_sync_module_js.js"
      ],
      "provides": [
        {
          "shareScope": "default",
          "shareKey": "universal-router/sync",
          "requiredVersion": "^9.0.1",
          "strictVersion": true,
          "singleton": false,
          "eager": false
        }
      ]
    }
  ],
  "federatedModules": [
    {
      "remote": "preactFrameworkExample",
      "entry": "http://localhost:5000/client-bundle/routes.js",
      "remoteModules": {
        "otherRemote/exposedFile": 893
      },
      "sharedModules": [
        {
          "chunks": [
            "http://localhost:5000/client-bundle/node_modules_preact_hooks_dist_hooks_module_js-_41171.js"
          ],
          "provides": [
            {
              "shareScope": "default",
              "shareKey": "preact/hooks",
              "requiredVersion": "^10.5.7",
              "strictVersion": true,
              "singleton": false,
              "eager": false
            }
          ]
        },
        {
          "chunks": [
            "http://localhost:5000/client-bundle/vendors-node_modules_preact_dist_preact_module_js.js"
          ],
          "provides": [
            {
              "shareScope": "default",
              "shareKey": "preact",
              "requiredVersion": "^10.5.7",
              "strictVersion": true,
              "singleton": false,
              "eager": false
            }
          ]
        },
        {
          "chunks": [
            "http://localhost:5000/client-bundle/vendors-node_modules_universal-router_sync_module_js.js"
          ],
          "provides": [
            {
              "shareScope": "default",
              "shareKey": "universal-router/sync",
              "requiredVersion": "^9.0.1",
              "strictVersion": true,
              "singleton": false,
              "eager": false
            }
          ]
        }
      ],
      "exposes": {
        "./src/routes/About.tsx": [
          {
            "chunks": [
              "http://localhost:5000/client-bundle/src_routes_About_tsx.css",
              "http://localhost:5000/client-bundle/src_routes_About_tsx.js"
            ],
            "sharedModules": [
              {
                "chunks": [
                  "http://localhost:5000/client-bundle/vendors-node_modules_preact_dist_preact_module_js.js"
                ],
                "provides": [
                  {
                    "shareScope": "default",
                    "shareKey": "preact",
                    "requiredVersion": "^10.5.7",
                    "strictVersion": true,
                    "singleton": false,
                    "eager": false
                  }
                ]
              }
            ]
          }
        ],
        "./src/routes/Home.tsx": [
          {
            "chunks": [
              "http://localhost:5000/client-bundle/src_routes_Home_tsx.css",
              "http://localhost:5000/client-bundle/src_routes_Home_tsx.js"
            ],
            "sharedModules": [
              {
                "chunks": [
                  "http://localhost:5000/client-bundle/vendors-node_modules_preact_dist_preact_module_js.js"
                ],
                "provides": [
                  {
                    "shareScope": "default",
                    "shareKey": "preact",
                    "requiredVersion": "^10.5.7",
                    "strictVersion": true,
                    "singleton": false,
                    "eager": false
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}
```
