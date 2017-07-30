'use strict'
(function(module) {
//Setting project view to an object on app so we can attach stuff to it//
  let projectView = {};

  let render = function(project) {
    let template = Handlebars.compile($('#project-template').text());
    return template(project);
  };

  projectView.appear = function(projects) {
    $('#toContact').hide();
    $('#toAccomps').hide();
    $('#toPortfolio').hide();
    $('#toHome').show();
    $('#projectsList').show();
    projects.forEach(proj => $('#projectsList').append(render(proj)));
  }

  module.projectView = projectView;
})(app);
