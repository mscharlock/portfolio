//This file appends all of my projects on the DOM//
'use strict';

var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  repos.request = function(callback) {
    $.get('/github/user/repos')
    .then(
          data => {
            console.log(data);
            repos.all = data;
          },
          err => console.error(err)
    )
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
