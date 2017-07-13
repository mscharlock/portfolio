//This file hides/shows content on the DOM dynamically//
'use strict';

//Object to hold all of our methods//
var viewPage = {};

//Some methods to hide/show//
viewPage.hideSections = function() {
  $('.hideData').hide();
}

viewPage.hideNav = function() {
  $('nav').on('click', function() {
    $('nav li').show();
    // $('nav li:nth-child(1)').find('#'). //something here about selecting the right li and then replacing the # with the right class? Or maybe I need to rethink that bit
    //and then chain to the end of that...
    // .show()

  })
}

//Pseudo-code the above problem:
//When we run viewPage.hideNav, on a click, we want the lis to appear. We also want each li to be linked (href) to their respective hidden part page (which I've designated as a class but maybe I should rethink that) and then have that page actually show
//Does this mean I need to do a click within a click? I might have to ask tomorrow

$(document).ready(function(){
  viewPage.hideSections();
  viewPage.hideNav();
})
