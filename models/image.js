const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const image = new Schema({
  title: {
    type: String
  },
  url: {
    type: String
  },
  description: {
    type: String
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: 'Album'
  }
  
});

module.exports = mongoose.model('Image', image);