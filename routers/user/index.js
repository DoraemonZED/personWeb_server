const router = require('koa-router')()


router.use(require('./user-login').routes())
router.use(require('./user-regist').routes())


module.exports = router
