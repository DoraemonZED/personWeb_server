const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()
const { prot } = require('./config')

router.use(require('./routers/index.js'))

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(prot,()=>{
    console.log(`${prot}端口已启动...`)
  })