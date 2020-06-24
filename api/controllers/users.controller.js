const UserModel = require('../models/users.model')

function getAllUsers (req, res) {
  UserModel
    .find()
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function getUserById (req, res) {
  UserModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function createUser (req, res) {
  UserModel
    .create(req.body)
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function deleteUserById (req, res) {
  UserModel
    .findByIdAndDelete(req.params.id)
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById
}
