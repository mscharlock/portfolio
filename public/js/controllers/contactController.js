'use strict';
var app = app || {};
(function(module){

  const contactController = {};

  contactController.init = function() {
    $('#toContact').siblings().hide();
    $('#toContact').show();
  }

  module.contactController = contactController;
})(app);
