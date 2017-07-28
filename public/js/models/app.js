//This file appends all of my projects on the DOM//
'use strict'
const repos = {};
repos.all = [];

repos.request = function(callback) {
  $.ajax({
    url: 'https://api.github.com/user/repos?type=owner',
    method: 'GET',
    headers: {
      Authorization: `token ${gitHubToken}`,
    }
  })
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
