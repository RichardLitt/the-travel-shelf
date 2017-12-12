const mongoose = require('mongoose')

const BookstoreSchema = new mongoose.Schema({
  dateAdded: { type: Date, default: Date.now },
  name: String,
  summary: String,
  review: String,
  thumbnail: String,
  images: [String],
  url: String,
  telephone: String,
  amenities: {
    coffee: {type: Boolean, default: false},
    wifi: {type: Boolean, default: false},
    plugs: {type: Boolean, default: false},
    events: {type: Boolean, default: false}
  },
  social: {
    twitter: String,
    facebook: String,
    instagram: String
  },
  postalAddress: {
    addressCountry: String,
    addressRegion: String,
    addressLocality: String,
    postalCode: String,
    streetAddress: String
  }
})

const Bookstore = mongoose.model('Bookstore', BookstoreSchema)

module.exports = Bookstore
