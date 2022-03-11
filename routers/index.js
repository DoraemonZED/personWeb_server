const router = require('koa-router')()


router.use('/user', require('./user.js').routes())


module.exports = router