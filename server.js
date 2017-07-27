'use strict';
let express = require('express');
let app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('/public'));
//
// const conString = 'postgres://postgres:1234@localhost:5432/'; // TODO: Don't forget to set your own conString
// const client = new pg.Client(conString);
// client.connect();
// client.on('error', err => console.error(err));

// app.post('/notsurewhatgoeshere', bodyParser, function(request, response) {
//   console.log(request.body);
//   response.send('Helloooo the server is listening to you!!');
// });

app.get('/', (request, response) => {
  response.sendFile('./index.html', {root:'./'})
});


app.listen(PORT, function(){
  console.log(`'listening on port number: ${PORT}'`);
});
