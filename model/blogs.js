
const mongoose = require('../mongodb/index')

let BlogSchema = new mongoose.Schema({

  navid: mongoose.Schema.Types.ObjectId,//文章所属的nav表 的id

  title: String,//题目

  up_time: Date,//文章创建和修改时间

  content: String,//文章内容

  author: String,//作者

  like_count: {
    type: Number,
    default : 0
  },//点赞数量

  look_count: {
    type: Number,
    default: 0
  },//浏览数量

},{
  versionKey: false
})

module.exports = mongoose.model('blog_item', BlogSchema)