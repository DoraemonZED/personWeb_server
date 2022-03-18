const router = require('koa-router')();
const {
    blogNav,
    getTitle,
    createNav,
    writeBlog,
    showBlog,
} = require('../controller/blogs-controller')

router.get('/blogNav', blogNav)//查询nav
router.post('/blogNav', createNav)//创建nav

router.get('/getTitle', getTitle)//根据navid查询标题

//写博客
router.post('/write', writeBlog)

//修改博客
// router.post('/modify')

// // 请求博客文章
router.get('/blog_paper', showBlog)

module.exports = router