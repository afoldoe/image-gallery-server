const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const villain = new Schema({
  title: {
    type: String
  },
  url: {
    type: String
  },
  description: {
    type: String
  },
  nemesis: {
    type: Schema.Types.ObjectId
  }
  
});

module.exports = mongoose.model('Villain', villain);