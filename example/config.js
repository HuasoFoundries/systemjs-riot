SystemJS.config({
    paths: {
        "github:": "jspm_packages/github/",
        "npm:": "jspm_packages/npm/",
        "systemjs-riot/": "src/"
    },
    browserConfig: {
        "baseURL": "/",
        "paths": {
            "dist/": "example/dist/",
            "riot": "node_modules/riot/riot.js",
            "tag": "systemjs-riot.js",
            "tags/": "example/tags/"
        }
    },
    nodeConfig: {
        "paths": {
            "tags/": "example/tags/"
        }
    },
    devConfig: {
        "map": {
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.17"
        }
    },
    transpiler: "plugin-babel",
    babelOptions: {
        "optional": [
            "runtime"
        ]
    },
    pluginFirst: true,
    meta: {
        "riot": {
            "build": false
        }
    },
    packages: {
        "systemjs-riot": {
            "main": "systemjs-riot.js"
        }
    },
    map: {
        "tag": "systemjs-riot.js"
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "fs": "npm:jspm-nodelibs-fs@0.2.0",
        "path": "npm:jspm-nodelibs-path@0.2.1",
        "process": "npm:jspm-nodelibs-process@0.2.0",
        "riot-compiler": "npm:riot-compiler@2.5.7"
    },
    packages: {}
});
