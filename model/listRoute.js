const mongoose = require('../mongodb/index')

let UserSchema = new mongoose.Schema({
  path: String,
  name: String,
  title: String
})

module.exports = mongoose.model('list-routes', UserSchema)