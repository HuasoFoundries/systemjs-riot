var assert = require('assert'),
    code = require('fs').readFileSync('./todo.js');

assert.ok(/riot\.tag2/.test(code));
