const router = require('koa-router')();
const {
    blogNav,
    getTitle,
    createNav,
    writeBlog,
    showBlog,
} = require('../controller/blogs-controller')

const {
    vertiTitle, //添加新导航分类时验证重复
} = require('../middleware/blogs')

router.get('/blogNav', blogNav)//查询nav

    .post('/blogNav', vertiTitle, createNav)//创建nav

    .get('/getTitle', getTitle)//根据navid查询标题

    .post('/write', writeBlog)//写博客

    // .post('/modify')//修改博客

    .get('/blog_paper', showBlog)// 请求博客文章

module.exports = router