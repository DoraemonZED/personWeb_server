const router = require('koa-router')()

// router.get('/index', ctx => {
//   ctx.body = '请求完成'
// })

router.use('/user', require('./user').routes())
router.use('/list', require('./list').routes())


module.exports = router