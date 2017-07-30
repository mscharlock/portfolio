'use strict';
var app = app || {};
(function(module){

  const portfolioController = {};

  portfolioController.init = function() {
    $('#toPortfolio').siblings().hide();
    $('#toPortfolio').show();
    $('#gitHubStuff').show();
    app.repos.request(gitHubView);
  }

  module.portfolioController = portfolioController;
})(app);
