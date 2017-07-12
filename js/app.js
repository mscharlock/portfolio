'use-strict';
$(document).ready(function(){
  var projects = [];

  function Project(rawProject) {
    this.title = rawProject.title;
    this.description = rawProject.description;
    this.date = rawProject.date;
    this.inClass = rawProject.inClass;
    this.langs = rawProject.langs;
  }

  Project.prototype.toHtml = function() {
    var $newProject = $('projects.template').clone();
    $newProject.data('title', this.title);
    $newProject.data('description', this.description);
    $newProject.data('date', this.date);
    $newProject.data('inClass', this.inClass);
    $newProject.data('langs', this.langs);
    $newProject.append('<hr>');

    return $newProject;
  }

  listofProjects.forEach(function(projectObj) {
    projects.push(new Project(projectObj));
  })

  listofProjects.forEach(function(project) {
    $('#projects').append(project.toHtml());
  })
})


  // FROM LAB:
  // articles.forEach(function(article) {
  // $('#articles').append(article.toHtml());
