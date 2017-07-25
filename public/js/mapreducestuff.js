'use strict'

var funFacts = [
  {
    text: 'Michelle was born in Germany',
    bool: true
  }, {
    text: 'My favorite flavor of ice cream is mint chocolate chip',
    bool: false
  }, {
    text: 'I once swam with dolphins',
    bool: true
  }
]

let trueFacts = funFacts.map(fact => {
  if (funFacts.bool === true) {
    $('#funFactsHere').show();
  }
})

var template = $('#funFactsTemplate').html()
var compile = Handlebars.compile(template);
$('#funFactsHere').append(compile(trueFacts));

let ageArr = [1988, 2017]
let ageNow = ageArr.reduce((acc, curr) => curr - acc);

$('#age').innerHTML(ageNow.val());
