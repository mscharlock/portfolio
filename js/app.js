'use-strict';
$(document).ready(function(){
  var projects = [];

  function createProject(rawProject) {
    this.title = rawProject.title;
    this.description = rawProject.description;
    this.date = rawProject.date;
    this.inClass = rawProject.inClass;
    this.langs = rawProject.langs;
  }

  createProject.prototype.toHtml = function() {
    var $newProject = $('projects.template').clone();
    $newProject.data('title', this.title);
    $newProject.data('description', this.description);
    $newProject.data('date', this.date);
    $newProject.data('inClass', this.inClass);
    $newProject.data('langs', this.langs);
    $newProject.append('<hr>');

    return $newProject;
  }
  listofProjects.forEach(function(articleObject) {
    projects.push(new Project(articleObject));
  })

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});

})
  /* TODO: This cloned article still has a class of template.
  However, in our modules.css stylesheet, we gave all elements
  with a class of template a display of none. Let's make
  sure we're not accidentally hiding our cloned article! */


//JQuery
$(document).ready(function(){
  //JQuery functionality to go here//
  $('nav').hide();
});
