const Koa = require('koa')
const bodyParser = require("koa-bodyparser");
const app = new Koa()
const { prot } = require('./config')
const router = require('./routers/index.js') //引入路由

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(prot,()=>{
    console.log(`${prot}端口已启动...`)
  })