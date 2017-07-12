'use-strict';
var projects = [];

function Project(rawProject) {
  this.title = rawProject.title;
  this.description = rawProject.description;
  this.date = rawProject.date;
  this.inClass = rawProject.inClass;
  this.langs = rawProject.langs;
}

Project.prototype.toHtml = function() {
  var $newProject = $('project.template').clone();
  $newProject.removeclass('template');

  $newProject.find('h3').text(this.title);
  // $newProject.data('description', this.description);
  // $newProject.data('date', this.date);
  // $newProject.data('inClass', this.inClass);
  // $newProject.data('langs', this.langs);
  // $newProject.append('<hr>');

  return $newProject;
}

// rawData.forEach(function(articleObject) {
//   // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
//   articles.push(new Article(articleObject));
// })
//
// articles.forEach(function(article) {
//   $('#articles').append(article.toHtml());
// })

listOfProjects.forEach(function(projectObj) {
  projects.push(new Project(projectObj));
})

listOfProjects.forEach(function(project) {
  $('#projects').append(project.toHtml());
})
