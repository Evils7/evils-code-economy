const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  id: String,
  para: Number,
  bankapara: Number,
  bankaalan: Number,
  tufek: Boolean,
  kamera: Boolean,
})

module.exports = mongoose.model('ekonomi', schema)