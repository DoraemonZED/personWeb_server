const userVerify = async (ctx, next) => {
    console.log(ctx.request.body)
    await next()
}

module.exports = {
    userVerify
}