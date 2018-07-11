(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('riot')) :
  typeof define === 'function' && define.amd ? define(['exports', 'riot'], factory) :
  (factory((global.tags = global.tags || {}),global.riot));
}(this, (function (exports,riot) { 'use strict';

riot = 'default' in riot ? riot['default'] : riot;

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

Object.defineProperty(exports, '__esModule', { value: true });

})));
