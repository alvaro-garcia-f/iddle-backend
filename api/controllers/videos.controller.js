const VideoModel = require('../models/videos.model')

function getVideo (req, res) {
  VideoModel
    .findById(req.params.videoId)
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function listVideosByTech (req, res) {
  VideoModel
    .find({ techs: req.params.techId })
    .populate('techs')
    .then(videos => res.json(videos))
    .catch(err => console.error(err))
}

function listVideosByLevel (req, res) {
  VideoModel
    .find({ level: req.params.level })
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function listVideosBySearch (req, res) {
  // '/search/:term'
  VideoModel
    .find({ $text: { $search: req.params.term } }, { score: { $meta: 'textScore' } })
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function listVideoComments (req, res) {
  VideoModel
    .findById(req.params.videoId)
    .then(response => res.json(response.comments))
    .catch(err => console.error(err))
}

function uploadVideo (req, res) {
  const info = req.body
  info.author = res.locals.user._id
  VideoModel
    .create(info)
    .then(response => {
      res.json(response)
    })
    .catch(err => console.error(err))
}

function addVideoComment (req, res) {
  VideoModel
    .findById(req.params.videoId)
    .then(response => {
      response.comments.push(req.body)
      response.save()
        .then(comment => { res.json(comment) })
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
}

function editVideoInfo (req, res) {
  VideoModel
    .findByIdAndUpdate(req.params.videoId, req.body, { new: true })
    .then(response => { res.json(response) })
    .catch(err => console.error(err))
}

function increaseVideoLikes (req, res) {
  VideoModel
    .findById(req.params.videoId)
    .then(video => {
      if (video.likes.includes(req.body.userId)) {
        video.likes.remove(req.body.userId)
      } else {
        video.likes.push(req.body.userId)
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
        if (comment._id.toString() === req.params.commentId) {
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
    .findByIdAndDelete(req.params.videoId)
    .then(response => { res.json(response) })
    .catch(err => console.error(err))
}

function deleteVideoComment (req, res) { // DELETE /videos/me/:videoId/comments/:commentId
  VideoModel
    .findById(req.params.videoId)
    .then(video => {
      video.comments.remove(req.params.commentId)
      video
        .save()
        .then(response => {
          res.json(response)
        })
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
}

module.exports = {
  getVideo,
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
