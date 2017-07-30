'use strict';

(function(module){

  //match up the keys on the projects, our Constructor//
  function Projects(rawProj) {
    Object.keys(rawProj).map(key => this[key] = rawProj[key]);
  }
  //Previously, we did something like this to match them up//
  // function Project(projectsJsonData) {
  //   this.title = projectsJsonData.title;
  //   this.description = projectsJsonData.description;
  //   this.date = projectsJsonData.dates;
  //   this.inClass = projectsJsonData.inClass;
  // }

  Projects.all = [];

//Put all the projects in the constructor///
  Projects.loadAll = projs => {
    Projects.all = proj.map(ele => new Projects(ele))
  }

  Projects.fetchAll = function() {
  //if there's already stuff in there, then parse, run thru constructor and call right view//
    if (localStorage.rawProj) {
      Projects.loadAll($.parseJSON(localStorage.rawProj));
      projectView.appear();
    } else {
      //Otherwise, get the Json stuff//
      $.getJSON('/projectsJson.json')
        .then(console.log('we are requesting for json stuff'))
          .then(rawProj => {
            //Put things in Local Storage//
            localStorage.setItem('rawProj', JSON.stringify(rawProj));
            console.log('Now is a good time to look in local storage to see if stuff went in there');
            //Parse the Json and then run everything through the constructor//
            Projects.loadAll($.parseJson(localStorage.rawProj));
            //now the data should be parsed and into objects and ready to go, so we call the right view//
            projectView.appear();
          })
    } module.Projects = Projects;
  }
})(app);
