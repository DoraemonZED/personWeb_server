const router = require('koa-router')()

// router.get('/index', ctx => {
//   ctx.body = '请求完成'
// })

router.use('/user',require('./user'))


module.exports = router.routes()