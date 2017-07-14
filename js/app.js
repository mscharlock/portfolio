//This file puts all of my projects on the DOM//
'use strict'
//grab it
var template = $('#project-template').html();

//compile
var showProjects = Handlebars.compile(template);

//set the context we'll pull from
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
//context is working: console.log('context', context)


$('#dynamicHandlebarsInfo').html(showProjects(context));
