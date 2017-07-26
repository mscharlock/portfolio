//This file appends all of my projects on the DOM//
'use strict'

//Projects data//
var context = {
  projects: [
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


//Can I move the data somewhere else?//
//Using handlebars to grab/compile/append
var template = $('#project-template').html();
var showProjects = Handlebars.compile(template);
$('#dynamicHandlebarsInfo').append(showProjects(context));
