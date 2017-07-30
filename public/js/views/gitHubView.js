'use strict';
(function(module) {
//Setting view to an object so we can attach methods to it//
  let gitHubView = {};

  let render = Handlebars.compile($('#repo-template').html());

  gitHubView.appear = function() {
    $('#gitHubStuff').append(repos.with('name').map(render));
    console.log('Are we calling the GH repos? Yes!');
  };

  module.gitHubView = gitHubView;
})(app);
