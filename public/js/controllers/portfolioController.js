'use strict';
var app = app || {};
(function(module){

  const portfolioController = {};

  portfolioController.init = function() {
    $('#toPortfolio').siblings().hide();
    $('#toPortfolio').show();
  }

  module.portfolioController = portfolioController;
})(app);
