const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = new Schema({
  name: String,
  auth: String,
  img: String,
  link: String,
})

module.exports = mongoose.model('Song', Song)