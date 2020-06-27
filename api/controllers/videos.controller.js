const VideoModel = require('../models/videos.model')

function getVideo (req, res) {
  VideoModel
    .findById(req.params.videoId)
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function listVideosByTech (req, res) {
  VideoModel
    .find()
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

function listVideosByLevel (req, res) {
  VideoModel
    .find({ level: req.params.level })
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function listVideosBySearch (req, res) {

}

function listVideoComments (req, res) {
  VideoModel
    .findById(req.params.videoId)
    .then(response => res.json(response.comments))
    .catch(err => console.error(err))
}

function uploadVideo (req, res) {
  VideoModel
    .create(req.body)
    .then(response => { res.json(response) })
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

}

function increaseVideoViews (req, res) {

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
