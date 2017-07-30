'use strict'

var app = app || {};

(function(module){
  const homeController = {};

  homeController.init = function() {
    $('#toHome').siblings().hide();
    $('#toHome').show();
    Project.prototype.compileStuff();
    Project.fetchAll();
  };

  module.homeController = homeController;
})(app);
