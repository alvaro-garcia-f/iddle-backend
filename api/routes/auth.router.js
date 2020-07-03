const router = require('express').Router()
const { authUser } = require('../utils')

const {
  signUp,
  logIn,
  myId
} = require('../controllers/auth.controller')

router
  .get('/me', authUser, myId)
  .post('/signup', signUp)
  .post('/login', logIn)

module.exports = router
