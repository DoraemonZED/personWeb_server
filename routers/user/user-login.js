const router = require('koa-router')()
const user = require('../../model/user')

router.get('/login', async ctx => {
  let a = await user.find()
  ctx.body = {
    c:123,
    a,
  }
})

module.exports = router