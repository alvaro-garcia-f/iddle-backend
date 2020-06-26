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

}

function listVideosBySearch (req, res) {

}

function listVideoComments (req, res) {

}

function uploadVideo (req, res) {
  VideoModel
    .create(req.body)
    .then(video => { res.json(video) })
    .catch(err => console.error(err))
}

function addVideoComment (req, res) {

}

function editVideoInfo (req, res) {

}

function increaseVideoLikes (req, res) {

}

function increaseVideoViews (req, res) {

}

function editVideoComment (req, res) {

}

function deleteVideo (req, res) {

}

function deleteVideoComment (req, res) {

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
