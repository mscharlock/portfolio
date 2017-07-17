//This file hides/shows content on the DOM dynamically//
'use strict';

//Object to hold all of our methods//
var viewPage = {};

//Some methods to hide/show//
viewPage.hideSections = function() {
  $('section').hide();
  $('.template').hide();
  $('.texture').fadeIn();
  $('.navTab').hide();
  $('.skills').fadeIn();
}

viewPage.openNav = function() {
  $('nav').on('click', function() {
    $('.navTab').show()
  })}

viewPage.liGo = function() {
  $('ul').on('click', 'li', function(e) {
    e.stopPropagation();
    console.log($(this));
    viewPage.hideSections();
    $('#' + $(this).data('goto')).css('display', 'initial');
    $('.template').hide();
    $('.skills').hide();
  })
}

$(document).ready(function(){
  viewPage.hideSections();
  viewPage.openNav();
  viewPage.liGo();
})
