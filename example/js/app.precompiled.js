define([
  "riot",
  "dist/alltags.js"

], function(riot) {

  riot.mount('timer', {
    start: 0
  });

  riot.mount('panels');

  riot.mount('todo', {
    items: [{ title: 'wash my teeth' }, { title: 'wipe my hands' }]
  });

  riot.route.start(true);


});
