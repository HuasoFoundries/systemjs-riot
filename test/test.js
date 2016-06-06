var assert = require('assert'),
    jspm = require('jspm'),
    fs = require('fs'),
    thetags = ['tags/todo.tag', 'tags/timer.tag', 'tags/panels.tag'],
    theoutputs = ['example/dist/todo.js', 'example/dist/timer.js', 'example/dist/panels.js'];

describe('Bundle precompiled tag file', function() {
    this.timeout(10000);
    for (var i = 0; i < thetags.length; i++) {
        var infile = thetags[i],
            outfile = theoutputs[i];
        it('Should be able to compile and bundle ' + infile, function(done) {


            fs.exists(outfile, function(exists) {
                if (exists) {
                    fs.unlinkSync(outfile);
                }

                jspm.bundleSFX('tag!' + infile, outfile, {
                    minify: false,
                    sourceMaps: false,
                    format: 'amd'
                }).then(function() {
                    done();
                }).catch(function(err) {
                    console.error('Bundle falla');
                    throw err;
                });
            });

        });

    }
});

describe('The bundled file containts valid code', function() {
    this.timeout(2000);
    for (var j = 0; j < thetags.length; j++) {
        var outfile = theoutputs[j];


        it(outfile + ' should contain riot.tag2', function(done) {
            setTimeout(function() {
                var code = fs.readFileSync(outfile);
                assert.ok(/riot\.tag2/.test(code));

                done();
            }, 50);
        });
    }
});
