'use strict'

var app = app || {};

(function(module){
  const homeController = {};

  homeController.init = function() {
    // $('.template').hide();
    // $('.texture').fadeIn();
    // $('.navTab').hide();
    // $('section').hide();
    $('#toContact').siblings().hide();
    $('#toContact').show();
    // $('.skills').show()
    console.log('wat');
    repos.request(gitHubView);
  };



  module.homeController = homeController;
})(app);
