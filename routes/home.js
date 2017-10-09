var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("Hello World! Welcome to the home route!");
});

module.exports = router;
