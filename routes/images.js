const express = require('express');
const bodyParser = require('body-parser').json();
const Image = require('../models/image');
const router = express.Router();

module.exports = router 

  .get('/', (req, res, next) => {
    Image.find({})
      .then(images => res.send(images))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Image.find(req.params.id)
      .then(image => res.send(image))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then(savedPic => res.send(savedPic))
      .catch(next);
  })
  
  .delete( '/:id', ( req, res, next ) => {
    Image.findByIdAndRemove(req.params.id)
    .then(deletedPic => res.send(deletedPic))
    .catch(next);
  });

