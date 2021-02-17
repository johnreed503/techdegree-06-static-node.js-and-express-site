const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.use(express.static('public'));

const projectdata = require('./data.json')
console.log('hello')
console.log(projectdata.projects[0].description)
// const data = jsondata.json()
// console.log(data)

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/project/id', (req, res) => {
  res.render('project');
});

app.get('/error', (req, res) => {
  res.render('error');
});


app.use((req, res, next) => {
  const err = new Error('NOT FOUND');
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});

app.listen(3000, () => {
  console.log('the application is running on localhost:3000!')
});
