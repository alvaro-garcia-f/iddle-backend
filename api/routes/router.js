const router = require('express').Router()

const usersRouter = require('./user.router')

router
  .use('/users', usersRouter)

module.exports = router
