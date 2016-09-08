const express = require('express');
const bodyParser = require('body-parser').json();
const Hero = require('../models/hero');
const router = express.Router();

module.exports = router 

  .get('/', (req, res, next) => {
    Hero.find({})
      .then(heroes => res.send(heroes))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    console.log(req.body);
    new Hero(req.body).save()
      .then(savedPic => res.send(savedPic))
      .catch(next);
  })
  
  .delete( '/:id', ( req, res, next ) => {
    Hero.findByIdAndRemove( req.params.id )
    .then( deletedPic => res.send( deletedPic ) )
    .catch( next );
  });

