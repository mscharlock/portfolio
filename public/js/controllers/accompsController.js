'use strict';
var app = app || {};
(function(module){

  const accompsController = {};

  accompsController.init = function() {
    $('#toAccomps').siblings().hide();
    $('#toAccomps').show();
  }

  module.accompsController = accompsController;
})(app);
