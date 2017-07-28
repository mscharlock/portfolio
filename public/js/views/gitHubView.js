'use strict';

let render = Handlebars.compile($('#repo-template').html());

let gitHubView = function() {
  $('#gitHubStuff').append(repos.with('name').map(render));
  console.log('hellooo');
};
