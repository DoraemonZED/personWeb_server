const userVerify = async (ctx, next) => {
    let { name, email, pwd } = ctx.request.body

    if(!name || !email || !pwd){
        
        ctx.app.emit('error', [400, '字段未传'], ctx)
        return
    }

    await next()
}

module.exports = {
    userVerify
}