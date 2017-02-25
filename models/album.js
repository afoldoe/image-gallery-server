const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const album = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Album', album);