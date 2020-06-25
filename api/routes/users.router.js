const router = require('express').Router()
// const { authUser } = require('../utils')

const {
  getUserProfile,
  getOwnProfile,
  editOwnProfile,
  editPhoto,
  deleteUserAccount
} = require('../controllers/users.controller')

router
  .get('/me', getOwnProfile)
  .get('/:id', getUserProfile)
  .put('/me', editOwnProfile)
  .put('/me/photo', editPhoto)
  .delete('/me', deleteUserAccount)

module.exports = router
