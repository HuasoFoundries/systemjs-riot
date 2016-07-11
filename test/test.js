var assert = require('assert'),
    Builder = require('jspm').Builder,


    fs = require('fs'),
    thetags = ['tags/todo.tag', 'tags/timer.tag', 'tags/panels.tag'],
    theoutputs = ['example/dist/todo.js', 'example/dist/timer.js', 'example/dist/panels.js'];

describe('Bundle precompiled tag file', function() {
    this.timeout(10000);
    var cb = function(filein, fileout) {
        return function(done) {


            fs.exists(fileout, function(exists) {
                if (exists) {
                    fs.unlinkSync(fileout);
                }

                var builder = new Builder();


                builder.bundle('tag!' + filein, fileout, {
                    minify: false,
                    sourceMaps: false,
                    format: 'amd'
                }).then(function() {
                    done();
                }).catch(function(err) {
                    console.error(err);
                    throw err;
                });
            });

        };
    };
    for (var i = 0; i < thetags.length; i++) {
        var infile = thetags[i],
            outfile = theoutputs[i];

        it('Should be able to compile and bundle ' + infile, cb(infile, outfile));

    }
});

describe('The bundled file containts valid code', function() {
    this.timeout(2000);
    var cb = function(fileout) {
        return function(done) {
            setTimeout(function() {
                var code = fs.readFileSync(fileout);
                assert.ok(/riot\.tag2/.test(code));

                done();
            }, 50);
        };
    };
    for (var j = 0; j < thetags.length; j++) {
        var outfile = theoutputs[j];
        it(outfile + ' should contain riot.tag2', cb(outfile));
    }
});
