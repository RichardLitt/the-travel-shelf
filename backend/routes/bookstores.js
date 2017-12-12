const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', function (req, res, next) {
  db.Bookstore.find()
    .then(stores => res.json(stores))
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
