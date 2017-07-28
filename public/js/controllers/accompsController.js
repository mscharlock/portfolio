'use strict';
var app = app || {};
(function(module){

  const accompsController = {};

  accompsController.init = function() {
    $('#toContact').siblings().hide();
    $('#toContact').show();
  }

  module.accompsController = accompsController;
})(app);
