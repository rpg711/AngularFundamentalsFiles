const fs = require('fs');

module.exports.get = (req, res) => {
  let event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.send(event);
};

