const router = require('express').Router()
// const { authUser } = require('../utils')

const {
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
} = require('../controllers/videos.controller')

router
  .get('/:videoId', getVideo)
  .get('/techs/:techId', listVideosByTech)
  .get('/level/:level', listVideosByLevel)
  .get('/search/:term', listVideosBySearch)
  .get('/:videoId/comments', listVideoComments)
  .post('/me', uploadVideo)
  .post('/me/:videoId/comments', addVideoComment)
  .put('/me/:videoId', editVideoInfo)
  .put('/me/:videoId/likes', increaseVideoLikes)
  .put('/:videoId/views', increaseVideoViews)
  .put('/me/:videoId/comments/:commentId', editVideoComment)
  .delete('/me/:videoId', deleteVideo)
  .delete('/me/:videoId/comments/:commentId', deleteVideoComment)

module.exports = router
