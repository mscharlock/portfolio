'use strict'

var app = app || {};

(function(module){
  const homeController = {};

  homeController.init = function() {
    // $('.template').hide();
    // $('.texture').fadeIn();
    // $('.navTab').hide();
    // $('section').hide();
    $('.skills').siblings().hide();
    $('.skills').show();
  }

  module.homeController = homeController;
})(app);
