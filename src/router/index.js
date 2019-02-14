const express = require('express')

let router = express.Router()

router.get('/', function (req, res) {
  res.render("main")
})
router.get('/client', function (req, res) {
  res.send('socket client');
})

router.get('/service', function (req, res) {
  res.send('socket service');
})
module.exports=router

