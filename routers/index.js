const router = require('koa-router')()


router.use('/user', require('./user.js').routes())
router.use('/blogs', require('./blogs.js').routes())


module.exports = router