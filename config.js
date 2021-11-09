module.exports = {

  prot:9901,//服务器端口

  mdbport:'mongodb://@120.26.38.9:27017/mydata?authSource=admin',//mongodb数据库

  Authorization : {
    jwtSecret: 'JWTSecret',//token密钥
    tokenExpiresTime: 60*1
  }
}
