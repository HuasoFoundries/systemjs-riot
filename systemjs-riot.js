/* SystemJS Riot Loader Plugin */
'use strict';

import compiler from 'riot-compiler';

export function translate(load) {
    var options = {
        //expr: true
        //type: 'babel'
    };
    load.metadata.format = 'amd';
    var precompiled = compiler.compile(load.source, options);
    var output = `define(['riot'], function(riot) { ${precompiled} });`;

    load.source = output;
    return output;
}
