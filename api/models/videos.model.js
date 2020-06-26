const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  text: {
    type: String
  }
})

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Name is required']
  },
  description: {
    type: String,
    required: [true, 'Username is required']
  },
  duration: {
    type: String,
    required: [true, 'Email is required']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  views: {
    type: Number
  },
  techs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'techs'
  }],
  level: {
    type: String,
    enum: ['newbie', 'beginner', 'intermediate', 'advance', 'expert']
  },
  uploadDate: {
    type: Date,
    default: new Date()
  },
  comments: [commentSchema]
})

const videoModel = mongoose.model('video', videoSchema)
module.exports = videoModel
