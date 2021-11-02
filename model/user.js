const mongoose = require('../mongodb/index')

let UserSchema = new mongoose.Schema({
  name: String,
  pwd: String,
})

module.exports = mongoose.model('user_detail', UserSchema, 'user_detail')