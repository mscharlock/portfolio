'use strict';
let express = require('express');
let app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('.'));

app.get('*', (request, response) => {
  response.sendFile('./index.html', {root:'.'})
});


app.listen(PORT, function(){
  console.log(`'listening on port number: ${PORT}'`);
});
