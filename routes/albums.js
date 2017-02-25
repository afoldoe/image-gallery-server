const express = require('express');
const bodyParser = require('body-parser').json();
const Album = require('../models/album');
const router = express.Router();

module.exports = router 

  .get('/', (req, res, next) => {
    Album.find({})
      .then(albums => res.send(albums))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Album.findById(req.params.id)
      .then(album => res.send(album))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    console.log(req.body);
    new Album(req.body).save()
      .then(savedPic => res.send(savedPic))
      .catch(next);
  })
  
  .delete('/:id', (req, res, next) => {
    Album.findByIdAndRemove(req.params.id)
    .then(deletedPic => res.send(deletedPic))
    .catch(next);
  });

