/* SystemJS Riot Loader Plugin */
'use strict';

import compiler from 'riot-compiler';

export function translate(load) {
    let precompiled = compiler.compile(load.source);
    let output;

    if (load.metadata.format === 'esm') {
      output = `import riot from 'riot';\n${precompiled}`;
    } else {
      output = `define(['riot'], function(riot) { ${precompiled} });`;
    }

    load.source = output;
    return output;
}
