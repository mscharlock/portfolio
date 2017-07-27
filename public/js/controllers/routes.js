'use strict'
var app = app || {}; //if I use this, then I have to figure out what is attached to app//

//TODO:I gotta change this so the functionName handles the specific hide/show of the page//
page('/', app.homeController.init);
page('/portfolio', app.portfolioController.init);
page('/accomplishments', app.accompsController.init);
page('/contact', app.contactController.init);

page();
