const userVerify = async (ctx, next) => {
    let { name, email, pwd } = ctx.request.body

    if(!name || !email || !pwd){
        ctx.status = 400
        ctx.body = {
            code: '400',
            message: '存在未传字段',
            result: ''
        }
        return
    }

    await next()
}

module.exports = {
    userVerify
}