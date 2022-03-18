const mongoose = require('../mongodb/index')

const NavSchema = new mongoose.Schema({
    state: {//NAV所属分类:1. 学习笔记 2.表格
        type: Number,
        default: 1
    },

    title: String,//标题

    order: {//序号用于排序操作
        type: Number,
        default: 0
    }

},{
    versionKey: false
})

module.exports = mongoose.model('blog_nav', NavSchema)