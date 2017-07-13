//This file puts all of my projects on the DOM//
'use strict';
var projects = [];

function Project(rawProject) {
  this.title = rawProject.title;
  this.description = rawProject.description;
  this.date = rawProject.date;
  this.inClass = rawProject.inClass;
  this.langs = rawProject.langs;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  //
  // //where we'll match all the things//
  $newProject.find('h3').text(this.title);
  $newProject.find('.description').html(this.description);
  $newProject.find('.date').html('Created on ' + this.date);
  $newProject.find('.inClass').html(this.inClass);
  $newProject.find('.langs').html(this.langs);
  $newProject.append('<hr>');
  return $newProject;
};

listOfProjects.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#toPortfolio').append(project.toHtml());
})
