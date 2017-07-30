'use strict';
var app = app || {};
(function(module){

  const contactController = {};

  contactController.init = function() {
    $('#toContact').siblings().hide();
    $('#toContact').show();
    $('i').show()
    $('i').on('click', function() {
      $('.navTab').slideToggle();
    })
  }

  module.contactController = contactController;
})(app);
