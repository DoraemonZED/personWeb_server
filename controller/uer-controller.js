/* 用户操作控制器 */
const UserSchema = require('../model/user')

class UserController {
    /* 用户登录 */
    async userLogin(ctx, next){

    }

    /* 用户注册 */
    async userRegist(ctx, next){
        let a = await UserSchema.create({
            name: 'root_4',
            pwd: '123456',
            email: '2433255732@qq.com'
        })
        console.log(1)

        // ctx.body = {
        //     code: '1'
        // }
    }
}


module.exports = new UserController()