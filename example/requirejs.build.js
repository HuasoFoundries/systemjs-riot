({

    baseUrl: ".",

    paths: {
        "riot": "../node_modules/riot/riot+compiler.min",
        "tag": "../requirejs-riot",
        "tags": "./tags",
        "dist": "./dist"
    },

    normalizeDirDefines: "all",
    preserveLicenseComments: false,
    stubModules: ['tag'],

    name: "js/app",

    out: "dist/app.built.js",
    optimize: 'none',
    logLevel: 0,
    useStrict: true

})
