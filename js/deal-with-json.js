'use strict';

const successfulCallback = function(data) {
  localStorage.setItem('rawProjects', JSON.stringify(data));
}

const errorCallback = function(err) {
  console.error(err);
}


$.getJSON('projectsJson.json')
  .then(successfulCallback, errorCallback);
