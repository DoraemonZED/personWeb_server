const router = require('koa-router')()
//const user = require('../model/user')

router.get('/login', async ctx => {
  // let a = await user.create({ name:'admin', pwd:'123456' })
  //let a = await user.find({ pwd:'123456' })
  ctx.body = {
    c:123,
    //a
  }
})



module.exports = router.routes()
