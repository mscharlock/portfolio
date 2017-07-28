'use strict';
let express = require('express');
let app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

function proxyGitHub(req, res) {
  (reqProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {Authorization: `token ${process.env.gitHubToken}`}
  }))(req, res);
}

app.get('/github/*', proxyGitHub);


app.get('/', (request, response) => {
  response.sendFile('index.html', {root:'./public'})
});


app.listen(PORT, function(){
  console.log(`'listening on port number: ${PORT}'`);
});
