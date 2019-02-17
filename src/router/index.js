/* jshint esversion: 6 */
const express = require('express')
let router = express.Router()
router.get('/', function(req, res) {
  // 加载模板引擎
  res.render('main', { clients: []})
})

router.get('/service', function(req, res) {
  res.send('服务已启动')
})
module.exports = router;
