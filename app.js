const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.use(express.static('public'));

const projectdata = require('./data.json')
console.log('hello')
console.log(projectdata.projects[0].live_link)
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

app.get('/page-not-found', (req, res) => {
  res.render('page-not-found');
});

app.listen(3000, () => {
  console.log('the application is running on localhost:3000!')
});
