//This file puts all of my projects on the DOM//
'use strict';
function getProject() {
  //get the template
  var template = $('#dynamicHandlebarsInfo').html();

  //compile
  var showProjects = Handlebars.compile(template);

  var context = {
    stuff: [
      {
        title: 'Tweet Fighter',
        description: 'Simple web application which computes the "winner" of a tweet war.',
        date: 'June 2017',
        inClass: 'Created in 201',
        langs: ['HTML', 'CSS', 'JS'],
      }, {
        title: 'Top Hats for Cats mockup site',
        description: 'Simple website to practice parallax scrolling effect',
        date: 'June 2017',
        inClass: 'Created outside of CF',
        langs: ['HTML', 'CSS']
      }, {
        title: 'Press Release for RMHC-WWAA',
        description: 'Press release for Ronald McDonald House announcing their new house in Alaska',
        date: 'January 2017',
        inClass:'Created outside CF',
        langs: ['N/A']
      }
    ]
  };


  //pass in the context
  var passIn = showProjects(context);

  //render compiled crap
  $('#project-template').append(passIn);
}

getProject();

// var projects = [];
//
// function Project(rawProject) {
//   this.title = rawProject.title;
//   this.description = rawProject.description;
//   this.date = rawProject.date;
//   this.inClass = rawProject.inClass;
//   this.langs = rawProject.langs;
// }
//
// Project.prototype.toHtml = function() {
//   var $newProject = $('article.template').clone();
//   $newProject.removeClass('template');
//   //
//   // //where we'll match all the things//
//   $newProject.find('h3').text(this.title);
//   $newProject.find('.description').html(this.description);
//   $newProject.find('.date').html('Created on ' + this.date);
//   $newProject.find('.inClass').html(this.inClass);
//   $newProject.find('.langs').html(this.langs);
//   $newProject.append('<hr>');
//   return $newProject;
// };
//
// listOfProjects.forEach(function(projectObject){
//   projects.push(new Project(projectObject));
// });
//
// projects.forEach(function(project) {
//   $('#toPortfolio').append(project.toHtml());
// })
