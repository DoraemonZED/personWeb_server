const BlogNavSchema = require('../model/blogs_nav')

const vertiTitle = async (ctx, next) => {
    let { state, title } = ctx.request.body

    if(!state) { 
        ctx.app.emit('error', [400, 'state未传'], ctx) 
        return
    } 
    if(!title) { 
        ctx.app.emit('error', [400, 'title未传'], ctx) 
        return
    }

    try {
        let res = await BlogNavSchema.find({ title, state })
        if(res.length > 0){
            ctx.app.emit('error', [403, '此标题已存在'], ctx) 
            return
        }

    } catch (error) {
        ctx.app.emit('error', [500, '查询错误', error], ctx) 
    }

    await next()
}

module.exports = {
    vertiTitle
}