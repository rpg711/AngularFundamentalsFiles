const fs = require('fs');

module.exports.get = (req, res) => {
  let event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.send(event);
};

module.exports.save = (req, res) => {
  let event = req.body;
  let directory = fs.readdirSync('app/data/event/').map((v) => v.replace('.json', ''));
  let highNum = directory.length ? directory[directory.length - 1] : -1;
  let id = Number(highNum) + 1;

  event.id = id;
  fs.writeFileSync('app/data/event/' + id + '.json', JSON.stringify(event));
  res.send(event);
};

module.exports.getAllEvents = (req, res) => {
  let directory = fs.readdirSync('app/data/event');
  let events = directory.map((v) => fs.readFileSync('app/data/event/' + v, 'utf8'));
  console.log('getAllEvents() : ', events);
  res.send(events.map((v) => JSON.parse(v)));
};
