//setting up auth for server
const router = require('express').Router();
const jsonParser = require('body-parser');
const User = require('../models/user');
const token = require('../auth/token');
const ensureAuth = require('../auth/ensureAuth');

router

  .post('/signup', jsonParser, (req, res) => {
    const {username, password} = req.body;
    delete req.body.password;

    if(!password) {
      return res.status(400).json({
        msg: 'Please enter your password!'
      });
    }

    User.findOne({username})
      .then(existingUser => {
        if(existingUser) {
          return res.status(500).json({
            msg: 'Sign-up cancelled.',
            reason: 'User already exists.'
          });
        }
        const user = new User(req.body);
        user.generateHash(password);
        return user.save()
          .then(user => token.sign(user))
          .then(token => res.json({token}));
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Could not sign-up!',
          reason: err
        });
      })

      .post('/signin', jsonParser, (req, res) => {
        const {username, password} = req.body;
        delete req.body;

        User.findOne({username})
          .then(user => {
            if(!user) {
              return res.status(400).json({
                mag: 'Authentication failed!',
                reason: 'No user ' + username + 'exists.'
              });
            }
            if(!user.compareHash(password)) {
              return res.status(400).json({
                mag: 'Authentication failed!',
                reason: 'Password does not match.'
              })
            }
            token.sign(user).then(token => res.json({token}));
          })
          .catch(err => {
            res.status(500).json({
              msg: 'Signin failed',
              reason: err
            });
          })
      })

      .get('/verify', ensureAuth, (req, res) => {
        res.status(200).send({success: true});
      });
      
  });

module.exports = router;