'use strict'
var app = app || {};

page('/', app.homeController.init);
page('/portfolio', app.portfolioController.init);
page('/accomplishments', app.accompsController.init);
page('/contact', app.contactController.init);

page();
