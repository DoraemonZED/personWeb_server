const mongoose = require('../mongodb/index')

let UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true//用户名唯一
  },
  pwd: String,
})

module.exports = mongoose.model('user_detail', UserSchema, 'user_detail')