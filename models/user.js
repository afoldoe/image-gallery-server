const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const user = new Schema({
  username: {type: String, required: true},
  passwords: {type: String, required: true},
});

user.methods.generateHash = function(password) {
  return this.password = bcrypt.hashSync(password, 8);
}

user.methods.compareHash = function(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', user);