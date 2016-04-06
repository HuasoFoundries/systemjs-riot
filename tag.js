function getCompiler(loader) {


    if (typeof window !== 'undefined') {

        return loader.import('riot/riot+compiler.js');

    } else {

        try {
            compiler = loader._nodeRequire('riot-compiler');
            return Promise.resolve(compiler);

        } catch (err1) {
            if (err1.toString().indexOf('ENOENT') !== -1) {
                // riot-compiler not found under node_modules
                throw new Error('Install riot-compiler via `npm install riot-compiler --save-dev` for riot tags build support');
            } else {
                throw err1;
            }
        }


    }

}




export function translate(load) {
    // @todo be able to pass the options in config.js
    var options = {
        //expr: true
        //type: 'babel'
    };
    //load.metadata.format = 'amd';

    getCompiler(this).then(function(compiler) {
        var precompiled = compiler.compile(load.source, options);
        var output = ` define(['riot'],function(riot) { ${precompiled} });`;
        load.source = output;
        return output;
    });


}
