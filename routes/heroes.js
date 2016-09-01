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
  });

  // this.images = [{
  //   title: 'Wonder Woman',
  //   url: 'https://upload.wikimedia.org/wikipedia/en/8/8c/WonderWoman-Ross.png',
  //   description: 'Wonder Woman, aka Diana Prince'
  // },
  // {
  //   title: 'Batman',
  //   url: 'http://www3.jjc.edu/ftp/wdc13/nlambrakis/Images/Batman-marvel-comics-15215321-900-1034.jpg',
  //   description: 'Batman, aka Bruce Wayne'
  // },
  // {
  //   title: 'Superman',
  //   url: 'http://66.media.tumblr.com/tumblr_lww4saqpGw1qfxwtoo1_1280.jpg',
  //   description: 'Superman, aka Clark Kent'
  // },
  // {
  //   title: 'Flash',
  //   url: 'https://s-media-cache-ak0.pinimg.com/564x/58/2b/1f/582b1f0a87571d85924cecf72fb43c78.jpg',
  //   description: 'Flash, Wally West'
  // }, 
  // {
  //   title: 'Aquaman',
  //   url: 'http://static.comicvine.com/uploads/original/11112/111125964/3209370-2888483-2145654-aquaman_justice_league4.jpg',
  //   description: 'Aquaman, aka Arthur Curry'
  // },
  // {
  //   title: 'Hawkgirl',
  //   url: 'http://images1.wikia.nocookie.net/__cb20100915011535/smallville/images/b/b7/1191861-hawkgirl_19.jpg',
  //   description: 'Hawkgirl, aka Shiera Hall'
  // },
  // {
  //   title: 'Martian Manhunter',
  //   url: 'http://static.comicvine.com/uploads/original/3/31666/884376-martian_11.jpg',
  //   description: "Martian Manhunter, aka J'onn J'onzz"
  // }];