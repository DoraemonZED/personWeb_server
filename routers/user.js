const router = require('koa-router')();
const {
    userLogin,
    userRegist
} = require('../controller/uer-controller')
const {
    userVerify
} = require('../middleware/user')


router.post('/regist', userVerify, userRegist)//用户注册

router.post('/login', userLogin)//用户登录

module.exports = router