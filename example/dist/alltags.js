!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v&&(c.default=c.__useDefault=v),f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.default;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a","b","c"], ["d"], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('c', ['d'], false, function ($__require, $__exports, $__module) {
  return (function (riot) {
    riot.tag2('panels', '<nav><a each="{data}" href="#{id}">{title}</a></nav> <article> <h1>{page.title || \'Not found\'}</h1> <p>{page.body || \'Specified id is not found.\'}</p> </article>', 'panels,[riot-tag="panels"],[data-is="panels"]{ display: block; font-family: sans-serif; margin: 0; padding: 1em; text-align: center; color: #666; } panels nav,[riot-tag="panels"] nav,[data-is="panels"] nav{ display: block; border-bottom: 1px solid #666; padding: 0 0 1em; } panels nav > a,[riot-tag="panels"] nav > a,[data-is="panels"] nav > a{ display: inline-block; padding: 0 .8em; } panels nav > a:not(:first-child),[riot-tag="panels"] nav > a:not(:first-child),[data-is="panels"] nav > a:not(:first-child){ border-left: 1px solid #eee; }', '', function (opts) {
      var self = this;
      self.data = [{ id: "", title: "Home", body: "Click the link above." }, { id: "1", title: "First", body: "This is the first page." }, { id: "2", title: "Second", body: "This is the second page." }];
      self.page = self.data[0];

      riot.route(function (id) {
        self.page = self.data.filter(function (r) {
          return r.id == id;
        })[0] || {};
        self.update();
      });
    });
  }).call(this, $__require('d'));
});
$__System.registerDynamic('b', ['d'], false, function ($__require, $__exports, $__module) {
  return (function (riot) {
    riot.tag2('timer', '<p>Seconds Elapsed: {time}</p>', '', '', function (opts) {
      this.time = opts.start || 0;

      this.tick = function () {
        this.update({ time: ++this.time });
      }.bind(this);

      var timer = setInterval(this.tick, 1000);

      this.on('unmount', function () {
        clearInterval(timer);
      });
    });
  }).call(this, $__require('d'));
});
$__System.registerDynamic('a', ['d'], false, function ($__require, $__exports, $__module) {
  return (function (riot) {
    riot.tag2('todo', '<h3>{opts.title}</h3> <ul> <li each="{items.filter(whatShow)}"> <label class="{completed: done}"> <input type="checkbox" __checked="{done}" onclick="{parent.toggle}"> {title} </label> </li> </ul> <form onsubmit="{add}"> <input name="input" onkeyup="{edit}"> <button __disabled="{!text}">Add #{items.filter(whatShow).length + 1}</button> <button __disabled="{items.filter(onlyDone).length == 0}" onclick="{removeAllDone}"> X{items.filter(onlyDone).length} </button> </form>', '', '', function (opts) {
      this.items = opts.items;

      this.edit = function (e) {
        this.text = e.target.value;
      }.bind(this);

      this.add = function (e) {
        if (this.text) {
          this.items.push({ title: this.text });
          this.text = this.input.value = '';
        }
      }.bind(this);

      this.removeAllDone = function (e) {
        this.items = this.items.filter(function (item) {
          return !item.done;
        });
      }.bind(this);

      this.whatShow = function (item) {
        return !item.hidden;
      }.bind(this);

      this.onlyDone = function (item) {
        return item.done;
      }.bind(this);

      this.toggle = function (e) {
        var item = e.item;
        item.done = !item.done;
        return true;
      }.bind(this);
    });
  }).call(this, $__require('d'));
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["riot"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("riot"));
  else
    throw new Error("Module must be loaded as AMD or CommonJS");
});