"bundle";
(function() {
var define = System.amdDefine;
define("systemjs-riot.js!tags/timer.tag", ["riot"], function(riot) {
  riot.tag2('timer', '<p>Seconds Elapsed: {time}</p>', '', '', function(opts) {
    this.time = opts.start || 0;
    this.tick = function() {
      this.update({time: ++this.time});
    }.bind(this);
    var timer = setInterval(this.tick, 1000);
    this.on('unmount', function() {
      clearInterval(timer);
    });
  });
});

})();