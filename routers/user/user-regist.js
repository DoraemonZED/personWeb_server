const router = require('koa-router')()
const user = require('../../model/user')

router.post('/regist', async ctx => {
    let { uid, pwd } = ctx.request.body
    try{
        return ctx.body = await user.create({ name:uid, pwd }) 
    }catch(e){
        let cb = {
            code: 403,
            message: '发生错误'
        }
        if(e.index === 0){
            cb.message = '用户名重复'
        }
        return ctx.body = cb
    }
})

module.exports = router