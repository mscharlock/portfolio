'use strict'

function Project(projectsJsonData) {
  this.title = projectsJsonData.title;
  this.description = projectsJsonData.description;
  this.date = projectsJsonData.dates;
  this.inClass = projectsJsonData.inClass;
}

Project.prototype.compileStuff = function() {
  // //Using handlebars to grab/compile/append
  // var template = $('#project-template').text();
  var showProjects = Handlebars.compile($('#project-template').text());
  return showProjects(this);
}


Project.fetchAll = function () {
  $.getJSON('/projectsJson.json')
    .then(console.log('req for json'))
      .then(function(jsons) {
        jsons.map(function (projectInst) {
          var projectInst = new Project(jsons)
        })
        .then($('projectsList').append(projectInst))
      })

Project.fetchAll();
//
//
// }$.getJSON('./projectsJson.json', function(projectsJsonData) {
//   projectsJsonData.map(function (projectsJsonProject) {
//     let projectInstance = new Project(projectsJsonData)
//       $('#projectsList').append(projectInstance);
//   })
// }
// )
//
//
// Article.fetchAll = function() {
//   if (localStorage.rawData) {
//     Article.loadAll(JSON.parse(localStorage.rawData));
//     articleView.initIndexPage();
//   } else {
//     $.getJSON('/data/hackerIpsum.json')
//     .then(function(rawData) {
//       Article.loadAll(rawData);
//       localStorage.rawData = JSON.stringify(rawData);
//       articleView.initIndexPage();
//     }, function(err) {
//       console.error(err);
//     });
//   }
// }
