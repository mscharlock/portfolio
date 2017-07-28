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

$.getJSON('./projectsJson.json', function(projectsJsonData) {
  projectsJsonData.map(function (projectsJsonProject) {
    let projectInstance = new Project(projectsJsonData)
      $('#dynamicHandlebarsInfo').append(projectInstance);
  })
}
)
