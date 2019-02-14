const express = require('express')
const router = require('./src/router/index')

let app = express()
app.set('views','./src/views/')
app.set('view engine','ejs')
app.use('/', router)
var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
