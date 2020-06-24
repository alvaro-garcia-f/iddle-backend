const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const videosRouter = require('./videos.router')
const techsRouter = require('./techs.router')

router
  .use('/auth', authRouter)
  .use('/users', usersRouter)
  .use('/videos', videosRouter)
  .use('/techs', techsRouter)

module.exports = router
