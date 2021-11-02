const mongoose = require('mongoose')
const { mdbport } = require('../config')

mongoose.connect(mdbport, { useNewUrlParser:true }, function(err){
  if(err){
    console.log(err)
    return;
  }
  console.log('mongodb连接成功...')
})

module.exports = mongoose