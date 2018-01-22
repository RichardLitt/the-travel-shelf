const express = require('express')
const router = express.Router()
const db = require('../models')
const awsUtil = require('../utils/aws')

router.get('/', function (req, res, next) {
  db.Bookstore.find()
    .then(stores => res.json(stores))
    .catch(err => console.log(err))
})

router.get('/s3', function (req, res, next) {
  awsUtil.sign(req.query.filename, req.query.filetype)
    .then(data => {
      console.log('s3 route', data)
      res.send(data)
    })
    .catch(err => console.log(err))
})

router.get('/:name', function (req, res, next) {
  db.Bookstore.findOne({name: req.params.name})
    .then(store => res.json(store))
    .catch(err => console.log(err))
})

router.post('/', function (req, res, next) {
  let newStore = new db.Bookstore({...req.body})
  res.sendStatus(200)
  newStore.save()
    .then(() => console.log('Store successfully added to database'))
    .catch(err => console.log(err))
})


module.exports = router
