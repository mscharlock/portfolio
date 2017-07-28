'use strict'

var app = app || {};

(function(module){
  const homeController = {};

  homeController.init = function() {
    $('#toContact').siblings().hide();
    $('#toContact').show();
    $('#gitHubStuff').show();
    repos.request(gitHubView);
  };



  module.homeController = homeController;
})(app);
