const express = require('express');
const path = require('path');
let app = express();
let rootPath = path.normalize(__dirname + '/../');

app.use(express.static( rootPath + '/app'));

app.listen(8000);
console.log('Listening on port ' + 8000 + '...');
