const path = require('path')
const fs = require('fs')
const fsP = require('fs/promises') 

class UploadFile {
    async blogImg(ctx, next){
        try {
            let file  = ctx.request.files.file
            
            let list = await fsP.readdir(path.join('public/images'))
            
            if(list.includes(file.name)){
                ctx.app.emit('error', [402, '已存在同名文件'], ctx)
            }else{
                let reader = fs.createReadStream(file.path)

                let upStream = fs.createWriteStream(path.join('public/images', file.name))
                reader.pipe(upStream)

                ctx.status = 200
                ctx.body = {
                    code: 200,
                    message: '上传图片成功',
                    result: ctx.origin + '/images/' + file.name
                }
            }
            
        } catch (error) {
            console.log(error)
            ctx.app.emit('error', [500, '上传错误', error], ctx)
        }
    }
}

module.exports = new UploadFile()