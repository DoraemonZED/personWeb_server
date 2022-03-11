module.exports = {

  prot:9901,//服务器端口

  mdbport:'mongodb://localhost:27017/mydata',//mongodb数据库

  Authorization : {
    jwtSecret: 'JWTSecret',//token密钥
    tokenExpiresTime: 60*1
  }
}
