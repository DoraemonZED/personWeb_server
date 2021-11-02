module.exports = {

  prot:5502,//服务器端口

  mdbport:'mongodb://127.0.0.1:27017/mydatabase',//mongodb数据库

  Authorization = {
    jwtSecret: 'JWTSecret',//token密钥
    tokenExpiresTime: 60*1
  }
}