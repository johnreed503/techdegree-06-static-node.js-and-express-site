const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.use(express.static('public'));

const projectdata = require('./data.json')
const projects = projectdata.projects



// app.use((req, res, next) => {
//   console.log('hello from errors')
//   const err = new Error('oh noes!');
//   err.status = 500;
//   next(err);
// });



app.get('/', (req, res) => {
  res.render('index', {projects});
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/project/:id', (req, res) => {
  res.render('project', {project: projects[req.params.id]});
});


app.use((req, res, next) => {
  const err = new Error('Unfortunatly the internet could not find the page you were looking for')
  err.status = 404
  next(err);
})

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(err.status)
    res.render('page-not-found', {error: err});
  } else {
  res.status(err.status)
  res.render('error', {error: err});
}
})



app.listen(3000, () => {
  console.log('the application is running on localhost:3000!')
});
