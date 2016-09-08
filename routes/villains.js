const express = require('express');
const bodyParser = require('body-parser').json();
const Villain = require('../models/villain');
const router = express.Router();

module.exports = router 

  .get('/', (req, res, next) => {
    Villain.find({})
      .then(villains => res.send(villains))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Villain(req.body).save()
      .then(savedPic => res.send(savedPic))
      .catch(next);
  })
  
  .delete( '/:id', ( req, res, next ) => {
    Villain.findByIdAndRemove( req.params.id )
    .then( deletedPic => res.send( deletedPic ) )
    .catch( next );
  });

