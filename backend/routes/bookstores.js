var express = require('express')
var router = express.Router()
var bookstores = require('../models')

router.get('/', function (req, res, next) {
  res.json(bookstores)
})

module.exports = router
