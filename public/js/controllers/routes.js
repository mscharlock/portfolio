'use strict'
var app = app || {}; //if I use this, then I have to figure out what is attached to app//

//TODO:I gotta change this so the functionName handles the specific hide/show of the page//
page('/', app.homeController.init);
page('/portfolio', functionName);
page('/resume', functionName);
page('/accomplishments', functionName);
page('/languages', functionName);
page('/volunteering', functionName);
page('contact', functionName);
page('/skills', app.skillsController.init);
page('/about', functionName);

page();
