function logs(req) {
    console.log(req)
}

module.exports = () => {
    return async( ctx, next ) => {
        logs(ctx.req.url)
        await next()
        logs(ctx.body)  
    }
}