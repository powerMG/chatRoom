const express = require('express');
const router = require('./src/router/index');
// const session=require('express-session');
let app = express()
let server = require('http').createServer(app)
const sockteio = require('socket.io')(server)
app.set('views', './src/views/')
app.set('view engine', 'ejs')
app.use('/', router)
// app.use(session({
//   secret:'keyboard cat',//相当于一个加密密钥，值可以是任意字符串
//   resave:false,//强制session保存到session store中
//   saveUninitialiazed:false //强制没有‘初始化’的session保存到storage中
// }));
let sockets = [];
// let nickNameLs = [];
sockteio.on('connection', socket => {
  console.log('1个客户端连接')
  sockets.push(socket)
  // console.log('客户端连接总数：' + sockets.length)
  // server.emit('userInfo',{userinfo:sockets})
  socket.on('sendMsg', msg => {
    console.log(msg)
    sockets.forEach(_socket => {
      _socket.emit('messageData', msg);
    });
  });
  socket.on('sendNickName', data => {
    console.log(data)
    // nickNameLs.push(data.nickName);
    // data.allNickName = nickNameLs;
    socket.emit('storageNickName', JSON.stringify(data))
  });
})
server.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`应用实例，访问地址为 http://${host}:${port}`)
})