const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.use(express.static('public'));

const projectdata = require('./data.json')
const projects = projectdata.projects
console.log('hello from app.js')
console.log(projectdata)
//console.log(projectdata.projects[0].image_urls[0].main)
const gitHub = projectdata.projects[0].github_link
//console.log(gitHub)
const mainPhoto = projectdata.projects[0].image_urls[0]




app.get('/', (req, res) => {
  res.render('index', {photo: mainPhoto, projects});
});

app.get('/about', (req, res) => {
  res.render('about', {gitHubLink: gitHub});
});

app.get('/project/:id', (req, res) => {
  res.render('project', {project: projects[req.params.id]});
});



app.listen(3000, () => {
  console.log('the application is running on localhost:3000!')
});
