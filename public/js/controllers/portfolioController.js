'use strict';
var app = app || {};
(function(module){

  const portfolioController = {};

  portfolioController.init = function() {
    // $('section').hide();
    // $('.template').hide();
    // $('.texture').fadeIn();
    // $('.navTab').hide();
    $('#toPortfolio').siblings().hide();
    $('#toPortfolio').show();
  }

  module.portfolioController = portfolioController;
})(app);
