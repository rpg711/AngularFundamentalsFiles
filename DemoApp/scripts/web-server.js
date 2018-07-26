const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const event = require('./eventsController');
const user = require('./usersController');

let app = express();
let rootPath = path.normalize(__dirname + '/../');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( rootPath + '/app'));

app.listen(8000);
console.log('Listening on port ' + 8000 + '...');

app.get('/healthcheck/', (req, res) => {
  res.send('Healthy as always!');
});

app.get('/data/event/:id', (req, res) => {
  console.debug('GET /data/event/' + req.params.id);
  event.get(req, res);
});

app.post('/data/event/', (req, res) => {
  console.debug('POST /data/event/');
  event.save(req, res);
});

app.post('/data/user/:userName', (req, res) => {
  console.debug('POST /data/user/' + req.params.userName);
  user.save(req, res);
});
