'use strict'

var app = app || {};

(function(module){
//   const skillsController = {};
//
//   skillsController.init = function() {
//     $('section').hide();
//     $('.template').hide();
//     $('.texture').fadeIn();
//     $('.navTab').hide();
//     $('.skills').show();
//   }
//
//   module.skillsController = skillsController;
// }

  const homeController = {};

  homeController.init = function() {
    $('section').hide();
    $('.template').hide();
    $('.texture').fadeIn();
    $('.navTab').hide();

  }

  module.homeController = homeController;
})(app);
