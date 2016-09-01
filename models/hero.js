const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hero = new Schema({
  title: {
    type: String
  },
  url: {
    type: String
  },
  description: {
    type: String
  }
  
});

module.exports = mongoose.model('Hero', hero);