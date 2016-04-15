/**
 * @license The MIT License (MIT)
 *
 * Copyright (c) 2016 Felipe Figueroa (amenadiel@gmail.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
define(['module'], function(module) {

    'use strict';

    var buildMap = {};
    var fileExtension = '.tag';
    var riotloader = {
        version: '0.0.1',

        getUrlContents: function GET(url, cb) {
            var req = new XMLHttpRequest();

            req.onreadystatechange = function() {
                if (req.readyState === 4 &&
                    (req.status === 200 || !req.status && req.responseText.length)) {
                    cb(req.responseText, url);
                }
            };
            req.open('GET', url, true);
            req.send('');
        },

        load: function(name, parentRequire, onLoad, config) {

            var name_with_extension = (name.indexOf(fileExtension) === -1) ? name.fileExtension : name,
                fileUrl = parentRequire.toUrl(name_with_extension),
                compiledTag;

            if (config.isBuild && require.nodeRequire) {
                try {

                    var noderiot = require.nodeRequire('riot'),
                        fs = require.nodeRequire('fs'),
                        tagtext = fs.readFileSync(fileUrl, 'utf8');

                    compiledTag = noderiot.compile(tagtext);

                    buildMap[name] = compiledTag;
                } catch (e) {
                    console.log('Riot not installed. Use "sudo npm install riot -g" to enable.');
                    console.log('Exception! ', e);
                }
                onLoad();


            } else {
                riotloader.getUrlContents(fileUrl, function(rawTag) {
                    parentRequire(['riot'], function(riot) {
                        compiledTag = riot.compile(rawTag, true);
                        var text = "require(['riot'],function(riot) {\n" + compiledTag + " });";
                        onLoad.fromText(text);

                    });
                });

            }
            return;

        },

        write: function(pluginName, moduleName, write) {
            console.log('write', moduleName);
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = buildMap[moduleName];
                write("define('" + pluginName + "!" + moduleName + "',['riot'], function(riot){ return " + content + "});\n");
            }
        }
    };

    return riotloader;
});
