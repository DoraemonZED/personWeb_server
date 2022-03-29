const path = require('path')
const fs = require('fs')
const fsP = require('fs/promises') 

class UploadFile {
    async blogImg(ctx, next){
        try {
            let file  = ctx.request.files.file
            
            let reader = fs.createReadStream(file.path)

            let upStream = fs.createWriteStream(path.join('public/images', file.name))
            reader.pipe(upStream)

            // const a = await fsP.readdir(path.join('public/images'))
            // console.log(a)
            

            ctx.status = 200
            ctx.body = {
                path: 'file.path'
                // path: file.path
            }
        } catch (error) {
            console.log(error)
            ctx.app.emit('error', [500, '上传错误', error], ctx)
        }
    }
}

module.exports = new UploadFile()