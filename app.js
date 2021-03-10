
//sets up express and sets up pug templating
const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));

//pulls in json data
const projectdata = require('./data.json')
const projects = projectdata.projects

//route for home page, passes in projects variable with all project data
app.get('/', (req, res) => {
  res.render('index', {projects});
});

//route for about page
app.get('/about', (req, res) => {
  res.render('about');
});

//route for project page, passes in individual project based on the :id
app.get('/project/:id', (req, res, next) => {
  if (projects[req.params.id] !== undefined) {
    res.render('project', {project: projects[req.params.id]});
  } else {
    const err = new Error('Unfortunatly the internet could not find the project you were looking for')
    err.status = 404
    next(err);
  }
});

//handles errors when a page is searched for but not found
app.use((req, res, next) => {
  const err = new Error('Unfortunatly the internet could not find the page you were looking for')
  err.status = 404
  next(err);
})

//handles errors
app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(err.status)
    res.render('page-not-found', {error: err});
    console.error('Unfortunatly the internet could not find the page you were looking for')
  } else {
  res.status(err.status)
  res.render('error', {error: err});
}
})


app.listen(3000, () => {
  console.log('the application is running on localhost:3000!')
});
