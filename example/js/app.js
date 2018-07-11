define([
  "riot",
  "tag!tags/timer.tag",
  "tag!tags/panels.tag",
  "tag!tags/todo.tag"

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
