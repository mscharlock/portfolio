'use strict';
var app = app || {};
(function(module){

  const portfolioController = {};

  //modelling after our lab but not sure what this is doing//
  portfolioController.appear = (ctx) => app.projectView.appear(ctx.Projects)

  portfolioController.init = function() {
    $('#toPortfolio').siblings().hide();
    $('#toPortfolio').show();
    $('#gitHubStuff').show();
    $('i').show()
    $('i').on('click', function() {
      $('.navTab').slideToggle();
    })
    //no idea why this doesn't work//
    app.repos.request(gitHubView.appear());
  }

//tried to attach context but I don't know what I'm doing here really//
  portfolioController.loadAll = (ctx, next) => {
    let projectData = () => {
      ctx.Projects = app.Projects.all;
      next();
    };

    if (app.Projects.all.length) {
      ctx.Projects = app.Projects.all;
      next();
    } else {
      app.Projects.fetchAll(projectData);
    }
  }

  module.portfolioController = portfolioController;
})(app);
