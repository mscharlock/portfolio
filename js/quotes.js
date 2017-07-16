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

var template = Handlebars.compile($('#quotes').html());
$('#quotesHere').append(template(data));



//Tried to follow Stephanie's Example Code:
//
// //construct the quotes
// function QuoteConstructor (quoteObject) {
//   this.text = quoteObject.text;
//   this.author = quoteObject.author;
// }
//
// //make a method to compile using Handlebars and append to DOM, attached to our quote constructor//
// quoteConstructor.prototype.domify = function (quote) {
//   var template = $('#quotes').html();
//   var compileTemplate = Handlebars.compile(template);
//   $(quote).append(compileTemplate(this));
// }
//
// //when we initialize the view, we call the domify function to feed it the right data to append//
// view.init = function () {
//   view.newQuote = new QuoteConstructor({});
//   view.quotes.forEach(function (quoteObject) {
//     var displayedQuote = new QuoteConstructor({
//       title: quoteObject.text,
//       author: quoteObject.author,
//     });
//     displayedQuote.domify('#quotesHere');
//   });
// };
