const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  about: {
    type: String
  },
  reputation: {
    type: Number
  },
  videos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'videos'
  }]
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
