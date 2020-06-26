const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  text: {
    type: String,
    require: true,
    maxlength: [325, 'max character length allowed is 325'],
    minlength: [1, 'min character length allowed is 1']
  }
})

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  duration: {
    type: Number,
    required: [true, 'Duration is required']
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
    type: Number,
    default: 0
  },
  techs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'techs'
  }],
  level: {
    type: String,
    enum: ['newbie', 'beginner', 'intermediate', 'advance', 'expert'],
    require: true
  },
  uploadDate: {
    type: Date,
    default: new Date()
  },
  comments: [commentSchema]
})

const videoModel = mongoose.model('video', videoSchema)
module.exports = videoModel
