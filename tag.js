var compiler = require('riot-compiler');

exports.translate = function(load) {
    // @todo be able to pass the options in config.js
    var options = {
        //expr: true
        //type: 'babel'
    };

    load.metadata.format = 'amd';
    var compiledtag = compiler.compile(load.source, options);
    //    console.log(compiledtag);
    var output = "def" + "ine(['riot'], function(riot) {" + "\n" + compiledtag + "\n" + "});";

    return output;
};
