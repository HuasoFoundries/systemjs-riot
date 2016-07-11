"bundle";
(function() {
var define = System.amdDefine;
define("systemjs-riot.js!tags/panels.tag", ["riot"], function(riot) {
  riot.tag2('panels', '<nav><a each="{data}" href="#{id}">{title}</a></nav> <article> <h1>{page.title || \'Not found\'}</h1> <p>{page.body || \'Specified id is not found.\'}</p> </article>', 'panels,[riot-tag="panels"],[data-is="panels"]{ display: block; font-family: sans-serif; margin: 0; padding: 1em; text-align: center; color: #666; } panels nav,[riot-tag="panels"] nav,[data-is="panels"] nav{ display: block; border-bottom: 1px solid #666; padding: 0 0 1em; } panels nav > a,[riot-tag="panels"] nav > a,[data-is="panels"] nav > a{ display: inline-block; padding: 0 .8em; } panels nav > a:not(:first-child),[riot-tag="panels"] nav > a:not(:first-child),[data-is="panels"] nav > a:not(:first-child){ border-left: 1px solid #eee; }', '', function(opts) {
    var self = this;
    self.data = [{
      id: "",
      title: "Home",
      body: "Click the link above."
    }, {
      id: "1",
      title: "First",
      body: "This is the first page."
    }, {
      id: "2",
      title: "Second",
      body: "This is the second page."
    }];
    self.page = self.data[0];
    riot.route(function(id) {
      self.page = self.data.filter(function(r) {
        return r.id == id;
      })[0] || {};
      self.update();
    });
  });
});

})();