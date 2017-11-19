const mongoose = require('mongoose')

const BookstoreSchema = new mongoose.Schema({
  dateAdded: { type: Date, default: Date.now },
  name: String,
  summary: String,
  review: String,
  thumbnail: String,
  images: [String],
  websiteUrl: String,
  locationUrl: String,
  coffee: {type: Boolean, default: false},
  wifi: {type: Boolean, default: false},
  plugs: {type: Boolean, default: false},
  events: {type: Boolean, default: false}
})

const Bookstore = mongoose.model('Bookstore', BookstoreSchema)

module.exports = Bookstore
