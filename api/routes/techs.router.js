const router = require('express').Router()

const {
  getAllTechs
} = require('../controllers/techs.controller')

router
  .get('/', getAllTechs)

module.exports = router
