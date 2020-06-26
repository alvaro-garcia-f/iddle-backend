const mongoose = require('mongoose')

const techSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Name is required']
  },
  clicks: {
    type: Number,
    default: 0
  }
})

const techModel = mongoose.model('techs', techSchema)
module.exports = techModel
