const TechModel = require('../models/techs.model')

function getAllTechs (req, res) {
  TechModel
    .find()
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  getAllTechs
}
