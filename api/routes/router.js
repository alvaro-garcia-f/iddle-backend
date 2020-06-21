const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./user.router')

// const { authUser } = require('../utils')

router
  .use('/auth', authRouter)
  .use('/users', usersRouter)

module.exports = router
