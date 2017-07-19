'use strict';

const successfulCallback = function(data) {
  localStorage.setItem('rawProjects', JSON.stringify(data));
}

const errorCallback = function(err) {
  console.error(err);
}

if (localStorage.rawProjects) {
  JSON.parse(localStorage.rawProjects)
} else {
  $.getJSON('projectsJson.json')
    .then(successfulCallback, errorCallback);
}
