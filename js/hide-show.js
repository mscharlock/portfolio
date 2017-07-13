//This file hides/shows content on the DOM dynamically//
'use strict';

//Object to hold all of our methods//
var viewPage = {};

//Some methods to hide/show//
viewPage.hideSections = function() {
  $('section').hide()
}

$(document).ready(function(){
  viewPage.hideSections();
})
