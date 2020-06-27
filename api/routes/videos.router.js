const router = require('express').Router()
const { authUser } = require('../utils')

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
  .post('/me', authUser, uploadVideo)
  .post('/me/:videoId/comments', authUser, addVideoComment)
  .put('/me/:videoId', authUser, editVideoInfo)
  .put('/me/:videoId/likes', authUser, increaseVideoLikes)
  .put('/:videoId/views', increaseVideoViews)
  .put('/me/:videoId/comments/:commentId', authUser, editVideoComment)
  .delete('/me/:videoId', authUser, deleteVideo)
  .delete('/me/:videoId/comments/:commentId', authUser, deleteVideoComment)

module.exports = router
