'use strict';
//our quotes
var data = {
  quotes: [
    {
      text: 'Influencer insights = our bread and butter on the Microsoft Commercial team.  Michelle Scharlock = our GOLD STAR example of living, breathing, sleeping that mentality!',
      author: 'Kelsey Guenther, Waggener Edstrom'
    }, {
      text: 'Michelle is the best!',
      author: 'Toby, Michelle\'s cat'
    }, {
      text: 'What a spifftactual person',
      author: 'Anonymous internet troll'
    }
  ]}

//Use handlebars to compile and append to html//
var template = Handlebars.compile($('#quotes').html());
$('#quotesHere').append(template(data));
