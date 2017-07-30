'use strict'

var app = app || {};

(function(module){
  const homeController = {};

  homeController.init = function() {
    $('.navTab').hide();
    $('#toHome').siblings().hide();
    $('#toHome').show();
    $('i').show()
    $('i').on('click', function() {
      $('.navTab').slideToggle();
    })
  };

  module.homeController = homeController;
})(app);
