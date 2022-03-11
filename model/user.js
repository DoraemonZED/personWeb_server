const mongoose = require('../mongodb/index')

let UserSchema = new mongoose.Schema({
  name: {//用户名
    type: String,
    unique: true
  },
  pwd: String,//密码
  email: String //邮箱
},{
  versionKey: false
})

module.exports = mongoose.model('user_detail', UserSchema)