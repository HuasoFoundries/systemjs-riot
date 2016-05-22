/* SystemJS Riot Loader Plugin */
'use strict';

import compiler from 'riot-compiler';

export function translate(load) {
    var options = {
        //expr: true
        //type: 'babel'
    };
    load.metadata.format = 'esm';
    var precompiled = compiler.compile(load.source, options);
    var output = `import riot from 'riot';\n${precompiled}`;

    load.source = output;
    return output;
}
