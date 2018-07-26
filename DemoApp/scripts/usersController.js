const fs = require('fs');

module.exports.save = (req, res) => {
  let user = req.body;
  let directory = fs.readdirSync('app/data/user/').map((v) => v.replace('.json', ''));
  let highNum = directory.length ? directory[directory.length - 1] : -1;
  let id = Number(highNum) + 1;
  user.id = id;
  fs.writeFileSync('app/data/user/' + String(id) + '.json', JSON.stringify(user));

  res.send(user);
};
