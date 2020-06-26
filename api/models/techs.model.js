const mongoose = require('mongoose')

const techSchema = new mongoose.Schema({
  name: {
    type: String
  },
  clicks: {
    type: Number
  }
})

const techModel = mongoose.model('user', techSchema)
module.exports = techModel
