'use strict';

import compiler from 'riot-compiler';

const riotRuntimePath = System.normalizeSync('riot', __moduleName);

export function translate(load) {
    var options = {
        //expr: true
        //type: 'babel'
    };
    load.metadata.format = 'amd';
    var precompiled = compiler.compile(load.source, options);
    var output = `define(['${riotRuntimePath}'], function(riot) { ${precompiled} });`;

    load.source = output; // `module.exports = require('${handlebarsRuntimePath}').template(${precompiled});`;
    return output;
}


/*exports.translate = function(load) {
    // @todo be able to pass the options in config.js
    var options = {
        //expr: true
        //type: 'babel'
    };

    load.metadata.format = 'amd';


    return System.import('riot-compiler', {
        name: module.id
    }).then(function(compiler) {
        console.log('compiler imported', compiler);
        var compiledtag = compiler.compile(load.source, options);
        //    console.log(compiledtag);
        var output = "def" + "ine(['riot'], function(riot) {" + "\n" + compiledtag + "\n" + "});";
        return output;
    });



};
*/
