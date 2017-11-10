const mongoose = require('mongoose')

const BookstoreSchema = new mongoose.Schema({
  name: String,
  locationUrl: String,
  dateAdded: { type: Date, default: Date.now },
  websiteUrl: String,
  coffee: Boolean,
  wifi: Boolean,
  plugs: Boolean,
  events: Boolean,
  review: Array
})

const Bookstore = mongoose.model('Bookstore', BookstoreSchema)

module.exports = Bookstore
