# systemjs-riot 

[![Build Status](https://travis-ci.org/HuasoFoundries/systemjs-riot.svg)](https://travis-ci.org/HuasoFoundries/systemjs-riot)
[![npm](https://img.shields.io/npm/dm/systemjs-riot.svg)](https://www.npmjs.com/package/systemjs-riot)

*The structure of this project blatantly imitates the layout of [floatDrop/plugin-jsx](https://github.com/floatdrop/plugin-jsx). Kudos to him.*

[Riot](http://riotjs.com/) loader plugin for [jspm](https://jspm.io)/[SystemJS](https://github.com/systemjs/systemjs)

This plugin will translate [Riot](http://riotjs.com/) tags JS. 

To use it you should install it with jspm:


```
jspm install tag
```


After that you can include Riot tags in your modules:

```js
import riot from 'riot';
import 'todo.tag!';

riot.mount('todo');

```

When you bundle (or bundle-sfx) you project, the tags will be precompiled and inlined as
part of the process. 

That being said, if you precompile your tags using the `bundle-sfx` command with the `--format amd` 
option, the result should also be compatible with AMD loaders such as [RequireJS](http://requirejs.org/).

```js
define(['riot','todo'],function(riot) {
	riot.mount('todo');
});
```


### Tests

```bash
npm install
npm test
```
