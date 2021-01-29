const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.send('I love making changes with nodemon yo');
});

app.listen(3000);
