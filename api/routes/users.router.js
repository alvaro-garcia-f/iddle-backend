const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getOwnProfile,
  getUserProfile,
  editOwnProfile,
  editPhoto,
  deleteUserAccount
} = require('../controllers/users.controller')

router
  .get('/me', authUser, getOwnProfile)
  .get('/:id', getUserProfile)
  .put('/me', authUser, editOwnProfile)
  .put('/me/photo', editPhoto)
  .delete('/me', authUser, deleteUserAccount)

module.exports = router
