# Riot Tag Plugin for SystemJS and RequireJS

[![Build Status](https://travis-ci.org/HuasoFoundries/systemjs-riot.svg)](https://travis-ci.org/HuasoFoundries/systemjs-riot) [![Code Climate](https://codeclimate.com/github/HuasoFoundries/systemjs-riot/badges/gpa.svg)](https://codeclimate.com/github/HuasoFoundries/systemjs-riot)
[![npm](https://img.shields.io/npm/dm/systemjs-riot.svg)](https://www.npmjs.com/package/systemjs-riot)

This is a loader plugin that enables to dinamically compile [Riot](http://riotjs.com/) tags
from [jspm](https://jspm.io)/[SystemJS](https://github.com/systemjs/systemjs) or [RequireJS](http://requirejs.org/)
and statically inline them during your build task.

Prior to version 1.2.0 the requirejs part of this loader was a separate project known as [requirejs-riot](https://www.npmjs.com/package/requirejs-riot),
which is now deprecated in favor of this one.


### Usage with JSPM/SystemJS

To use it you should install it with jspm:


```
jspm install tag
```


After that you can include Riot tags in your modules:

```js
import riot from 'riot';
import 'app.tag!';

riot.mount('app');

```

You can also use it when defining AMD style modules, and combine it with the `pluginFirst` option
of your SystemJS project to use it like:

```js
define(['riot','tag!todo.tag'], function(riot) {
	riot.mount('todo');
    riot.route.start(true);
});
```

### Usage with RequireJS


Install using npm like so:

```sh
npm install systemjs-riot
```

Add the proper config to your main requirejs.config. For example:

```js
requirejs.config({
    paths: {
        "riot": "/node_modules/riot/riot+compiler.min",
        "tag": "../requirejs-riot",
        "tags": "./tags",
        "dist": "./dist"
    }
});
```

Then load your tags by prepending `tag!` to their path:


```js
define(['riot','tag!timer.tag'], function(riot) {
	riot.mount('timer', {
        start: 0
    });
    riot.route.start(true);
});
```




## Running examples

Install [serve](https://www.npmjs.com/package/serve) or any other basic webserver

```sh
sudo npm install -g serve
make runexample
```

Then point your browser to `http://localhost:3000/`



### Precompilation and Bundling 

When you bundle or build your project, the tags will be precompiled and inlined as part of the process. 

The `make runexamples` task does run `make build`, which uses both `jspm` and `r.js` to generate working
bundles that you can inspect. The tasks run under the hood are:

**for jspm**:

```sh
jspm bundle-sfx 'tag!tags/todo.tag + tag!tags/timer.tag + tag!tags/app.tag - riot' example/dist/alltags.js --format umd
```

**for the `r.js` optimizer**

```sh
./node_modules/.bin/r.js -o example/requirejs.build.js
```



## Tests

```bash
npm install
npm test
```
