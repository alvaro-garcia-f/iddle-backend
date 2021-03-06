const VideoModel = require('../models/videos.model')
const UserModel = require('../models/users.model')
const mongoose = require('mongoose')

function listAllVideos (req, res) {
  VideoModel
    .find()
    .populate('author')
    .populate('techs')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function latestVideos (req, res) {
  VideoModel
    .find()
    .sort({uploadDate: 'desc'})
    .limit(5)
    .populate('author')
    .populate('techs')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function getVideo (req, res) {
  VideoModel
    .findById(req.params.videoId)
    .populate('author')
    .populate('techs')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function getMostWatchedVideos (req, res) {
  VideoModel
    .find({}, null, { sort: { views: -1 } })
    .limit(5)
    .populate('author')
    .populate('techs')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function listVideosByTech (req, res) {
  VideoModel
    .find({ techs: req.params.techId })
    .populate('author')
    .populate('techs')
    .then(videos => res.json(videos))
    .catch(err => console.error(err))
}

function listVideosByLevel (req, res) {
  VideoModel
    .find({ level: req.params.level })
    .populate('author')
    .populate('techs')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function listVideosBySearch (req, res) {
  VideoModel
    .find({ $text: { $search: req.params.term } }, { score: { $meta: 'textScore' } })
    .populate('author')
    .populate('techs')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function listVideoComments (req, res) {
  VideoModel
    .findById(req.params.videoId)
    .populate('comments.userId')
    .then(response => res.json(response.comments))
    .catch(err => console.error(err))
}

function uploadVideo (req, res) {
  req.body.techs = req.body.techs.map(t => mongoose.Types.ObjectId(t))
  const info = req.body
  info.author = res.locals.user._id
  console.log(info)
  VideoModel
    .create(info)
    .then(video => {
      UserModel
        .findById(info.author)
        .then(response => {
          response.videos.push(video._id)
          response.save()
        })
        .catch(err => console.error(err))
      res.json(video)
    })
    .catch(err => console.error(err))
}

function addVideoComment (req, res) {
  const info = {
    userId: res.locals.user._id,
    text: req.body.text
  }

  VideoModel
    .findById(req.params.videoId)
    .then(response => {
      response.comments.push(info)
      response.save()
        .then(comment => { res.json(comment) })
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
}

function editVideoInfo (req, res) {
  VideoModel
    .update({ $and: [{ _id: req.params.videoId }, { author: res.locals.user._id }] }, req.body, { new: true })
    .then(response => { res.json(response) })
    .catch(err => console.error(err))
}

function increaseVideoLikes (req, res) {
  VideoModel
    .findById(req.params.videoId)
    .then(video => {
      if (video.likes.includes(res.locals.user._id)) {
        video.likes.remove(res.locals.user._id)
      } else {
        video.likes.push(res.locals.user._id)
      }
      video.save()
        .then(response => res.json(response))
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
}

function increaseVideoViews (req, res) {
  VideoModel
    .findByIdAndUpdate(req.params.videoId, { $inc: { views: 1 } }, { new: true })
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function editVideoComment (req, res) {
  VideoModel
    .findById(req.params.videoId)
    .then(video => {
      video.comments.forEach(comment => {
        if (comment._id.toString() === req.params.commentId && comment.userId.toString() === res.locals.user._id.toString()) {
          comment.text = req.body.text
        }
      })
      video.save()
        .then(response => res.json(response))
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
}

function deleteVideo (req, res) {
  VideoModel
    .remove({ $and: [{ _id: req.params.videoId }, { author: res.locals.user._id }] })
    .then(response => { res.json(response) })
    .catch(err => console.error(err))
}

function deleteVideoComment (req, res) {
  VideoModel
    .findByIdAndUpdate(req.params.videoId, {
      $pull: {
        comments: { $and: [{ _id: req.params.commentId }, { userId: res.locals.user._id }] }
      }
    }, { new: true })
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  listAllVideos,
  latestVideos,
  getVideo,
  getMostWatchedVideos,
  listVideosByTech,
  listVideosByLevel,
  listVideosBySearch,
  listVideoComments,
  uploadVideo,
  addVideoComment,
  editVideoInfo,
  increaseVideoLikes,
  increaseVideoViews,
  editVideoComment,
  deleteVideo,
  deleteVideoComment
}
