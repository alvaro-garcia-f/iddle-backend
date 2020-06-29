const UserModel = require('../models/users.model')

// Review alll functions

function getUserProfile (req, res) {
  UserModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => console.error(err))

  // console.log(req.originalUrl)
}
function getOwnProfile (req, res) {
  UserModel
    .findById(res.locals.user._id)
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function editOwnProfile (req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.user._id, req.body, { new: true })
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function editPhoto () {

}

function deleteUserAccount (req, res) {
  UserModel
    .findByIdAndDelete(res.locals.user._id)
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  getUserProfile,
  getOwnProfile,
  editOwnProfile,
  editPhoto,
  deleteUserAccount
}
