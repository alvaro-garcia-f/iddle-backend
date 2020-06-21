const router = require('express').Router()

const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById
} = require('../controllers/users.controller')

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.delete('/:id', deleteUserById)

module.exports = router
