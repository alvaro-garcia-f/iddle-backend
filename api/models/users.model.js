const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    // unique: [true, 'username already exists'],
    default: ''
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    unique: [true, 'Email already exists in our database'],
    // validate: emailValidator
    match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'email not valid']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  about: {
    type: String,
    maxlength: [325, 'max character allowed 325'],
    default: ''
  },
  reputation: {
    type: Number,
    default: 0
  },
  videos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'video'
  }]
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
