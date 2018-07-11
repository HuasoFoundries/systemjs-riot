SystemJS.config({
  baseURL: "/",
  paths: {
    "npm:": "jspm_packages/npm/",
    "dist/": "example/dist/",
    "riot": "node_modules/riot/riot.js",
    "tag": "systemjs-riot.js",
    "tags/": "example/tags/"
  },
  nodeConfig: {
    "paths": {
      "systemjs-riot/": ""
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    }
  },
  transpiler: "plugin-babel",
  meta: {
    "riot": {
      "build": false
    },
    "*.tag": {
      "defaultExtension": false,
      "loader": "tag",
      "format": "esm"
    }
  },
  map: {
    "tag": "systemjs-riot.js"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "riot-compiler": "npm:riot-compiler@2.5.7"
  },
  packages: {}
});
