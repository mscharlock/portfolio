'use strict';
var app = app || {};
(function(module){

  const accompsController = {};

  accompsController.init = function() {
    $('#toAccomps').siblings().hide();
    $('#toAccomps').show();
    $('i').show()
    $('i').on('click', function() {
      $('.navTab').slideToggle();
    })
  }

  module.accompsController = accompsController;
})(app);
