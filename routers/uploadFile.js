const router = require('koa-router')();
const {
    blogImg
} = require('../controller/upload-controller')


router.post('/blogImg', blogImg)


module.exports = router