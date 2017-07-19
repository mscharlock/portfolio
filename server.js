'use strict';
let express = require('express');
let app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('/public'));

// app.post('/notsurewhatgoeshere', bodyParser, function(request, response) {
//   console.log(request.body);
//   response.send('Helloooo the server is listening to you!!');
// });

app.listen(PORT, function(){
  console.log(`'listening on port number: ${PORT}'`);
});
