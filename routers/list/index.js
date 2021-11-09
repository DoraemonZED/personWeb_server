const router = require('koa-router')()
const list = require('../../model/listRoute')


router.get('/route', async ctx => {
    // let res = await list.create(data)
    let tab = await list.find()
    return ctx.body = {
        code:200,
        data: tab,
    }
})


module.exports = router