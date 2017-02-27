const express = require('express');
const app = express();
const url = require('url');
const path = require('path');
const logger = require('morgan')('dev');
const auth = require('./routes/auth');
const albums = require('./routes/albums');
const images = require('./routes/images');
const ensureAuth = require('./auth/ensureAuth');

app.use(logger);
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  const url = '*';
  res.header('Access-Control-Allow-Origin', url);
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', auth);
app.use('/api/albums', albums);
app.use('/api/images', images);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.code || 500)
    .json({error: err.error || err.message || err});
});

module.exports = app;