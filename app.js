const Koa = require('koa')
const KoaBody = require('koa-body');
const KoaStatic = require('koa-static')
const path = require('path')
const app = new Koa()
const { prot } = require('./config')
const router = require('./routers/index.js') //引入路由
const logs = require('./middleware/logs')

app.on('error', (err, ctx) => {
  ctx.status = 200
  ctx.body = {
    code: err[0],
    message: err[1],
    result: err[2]?err[2]:''
  }
})

app
  .use(KoaBody({
    multipart: true
  }))
  .use(KoaStatic(path.join(__dirname, 'public')))
  .use(logs())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(prot,()=>{
    console.log(`${prot}端口已启动...`)
  })
