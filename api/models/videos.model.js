const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  text: {
    type: String,
    maxlength: [325, 'max character length allowed is 325'],
    minlength: [1, 'min character length allowed is 1']
  }
})

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  url: {
    type:String,
    required: [true, "URL is required"]
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
    ref: 'user'
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
    enum: ['beginner', 'intermediate', 'advanced'],
    required: true
  },
  uploadDate: {
    type: Date,
    default: new Date()
  },
  comments: [commentSchema]
})

videoSchema.index({ title: 'text', description: 'text', level: 'text' })

const videoModel = mongoose.model('video', videoSchema)
module.exports = videoModel
