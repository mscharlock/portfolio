//This file hides/shows content on the DOM dynamically//
'use strict';
$(document).ready(function(){
  var $hidden = $("data-hide[value='on-load']");
  $hidden.hide();
})
