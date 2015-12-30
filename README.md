# systemjs-riot [![Build Status](https://travis-ci.org/amenadiel/systemjs-riot.svg)](https://travis-ci.org/amenadiel/systemjs-riot)

[Riot](http://riotjs.com/) loader plugin for [jspm](https://jspm.io)/[SystemJS](https://github.com/systemjs/systemjs)


This plugin will translate [Riot](http://riotjs.com/) tags JS.

To use it you should install it with jspm:

```
jspm install tag=npm:systemjs-riot
```

After that you can include Riot tags in your modules:

```js
import riot from 'riot';
import 'todo.tag!';

riot.mount('todo');

```

### Tests

```bash
npm install
npm test
```
