const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.use(express.static('public'));

const projectdata = require('./data.json')
console.log('hello')
console.log(projectdata.projects[0].github_link)
const gitHub = projectdata.projects[0].github_link
console.log(gitHub)



console.log('this is a test')
app.get('/', (req, res) => {
  res.render('index', {data: 'Portfolio'});
});

app.get('/about', (req, res) => {
  res.render('about', {gitHubLink: gitHub});
});

app.get('/project/id', (req, res) => {
  res.render('project');
});



app.listen(3000, () => {
  console.log('the application is running on localhost:3000!')
});
