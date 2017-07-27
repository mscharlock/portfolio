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
  .then(if (bool === true) {
    $('#funFactsHere').fadeIn());
  }
})

var template = $('#funFactsTemplate').html()
var compiled = Handlebars.compile(template);
$('#funFactsHere').append(compiled);


let ageArr = [1988, 2017]
let ageNow = ageArr.reduce((acc, curr) => curr - acc);

$('#age').text(ageNow);
