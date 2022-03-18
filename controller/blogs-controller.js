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
            ctx.app.emit('error', [400, error], ctx)
        }
    }

    async blogNav(ctx, next){//查询博客标题
        try {
            let res = await BlogNavSchema.find()
            ctx.status = 200
            ctx.body = {
                code: 200,
                message: '查询成功',
                result: res
            }
        } catch (error) {
            ctx.app.emit('error', [400, error], ctx)
        }
    }

    async getTitle(ctx, next){//查询标题
        let { navid } = ctx.query

        try {
            let res = await BlogSchema.find({ navid },{ title: 1 })
            ctx.status = 200
            ctx.body = {
                code: 200,
                message: '查询成功',
                result: res
            }

        } catch (error) {
            ctx.app.emit('error', [400, '创建失败'], ctx)
        }
    }
    
    async writeBlog(ctx, next){//写博客
        let { navid, title, content, author } = ctx.request.body
        try {
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
            ctx.app.emit('error', [400, '创建失败'], ctx)
        }
    }

    async showBlog(ctx, next){//请求博客内容
        let { id } = ctx.query
        let res = await BlogSchema.findById(id)
        ctx.status = 200
        ctx.body = {
            code: 200,
            result: res
        }
    }
}

module.exports = new BlogConttroller()