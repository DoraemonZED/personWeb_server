const BlogSchema = require('../model/blogs')
const BlogNavSchema = require('../model/blogs_nav')

class BlogConttroller {
    async createNav(ctx, next){//新建标题
        let { title, state } = ctx.request.body
        try {
            let res = await BlogNavSchema.create({ title, state })
            ctx.status = 200
            ctx.body ={
                code: 200,
                message: '创建成功',
                result: res
            }
        } catch (error) {
            ctx.app.emit('error', [500, '查询错误', error], ctx)
        }
    }

    async blogNav(ctx, next){//查询导航
        try {
            let res = await BlogNavSchema.find()
            ctx.status = 200
            ctx.body = {
                code: 200,
                message: '查询成功',
                result: res
            }
        } catch (error) {
            ctx.app.emit('error', [500, '查询错误', error], ctx)
        }
    }

    async getTitle(ctx, next){//查询标题
        let { navid } = ctx.query

        try {
            let res = await BlogSchema.find({ navid },{ title: 1 })

            if(res.length <= 0){
                ctx.app.emit('error', [404, '未查询到数据'], ctx)
                return
            }

            ctx.status = 200
            ctx.body = {
                code: 200,
                message: '查询成功',
                result: res
            }

        } catch (error) {
            ctx.app.emit('error', [500, '查询错误', error], ctx)
        }
    }
    
    async writeBlog(ctx, next){//写博客
        let { navid, title, content, author } = ctx.request.body
        try {
            if(!navid) throw new Error('创建错误navid不存在')
            let res = await BlogSchema.create({
                navid, title, content, author, 
                up_time: new Date()
            })

            ctx.status = 200
            ctx.body = {
                code: 200,
                message: '创建成功',
                result: res._id
            }
        } catch (error) {
            ctx.app.emit('error', [500, '创建错误', error], ctx)
        }
    }

    async showBlog(ctx, next){//获取博客内容
        let { id, state } = ctx.query
        let res = await BlogSchema.findById(id)

        ctx.status = 200
        ctx.body = {
            code: 200,
            result: res
        }
    }
}

module.exports = new BlogConttroller()