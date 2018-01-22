const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('debug', true)
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.Promise = Promise

module.exports.Bookstore = require('./bookstore')
