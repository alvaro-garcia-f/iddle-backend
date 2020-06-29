const router = require('express').Router()

const {
  getAllTechs,
  initialize
} = require('../controllers/techs.controller')

router
  .get('/', getAllTechs)
  .post('/init', initialize)

module.exports = router
