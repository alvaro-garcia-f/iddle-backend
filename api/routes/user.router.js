const router = require('express').Router()

const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById
} = require('../controllers/users.controller')

router
  .get('/', getAllUsers)
  .get('/:id', getUserById)
  .post('/', createUser)
  .delete('/:id', deleteUserById)

module.exports = router
