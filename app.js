const express = require('express')
const router = require('./src/router/index')

let app = express()
let server = require('http').createServer(app)
const sockteio = require('socket.io')(server)
app.set('views', './src/views/')
app.set('view engine', 'ejs')
app.use('/', router)
let sockets = []
sockteio.on('connection', socket => {
  console.log('1个客户端连接')
  sockets.push(socket)
  // console.log('客户端连接总数：' + sockets.length)
  // server.emit('userInfo',{userinfo:sockets})
  socket.on('sendMsg', msg => {
    console.log(msg)
    sockets.forEach(_socket=>{
      _socket.emit('messageData',msg)
    })
  })
})
server.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log(`应用实例，访问地址为 http://${host}:${port}`)
})
