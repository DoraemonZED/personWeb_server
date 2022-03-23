const Koa = require('koa')
const bodyParser = require("koa-bodyparser");
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
  .use(bodyParser())
  .use(logs())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(prot,()=>{
    console.log(`${prot}端口已启动...`)
  })
