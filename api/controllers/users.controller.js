const UserModel = require('../models/users.model')

// Review alll functions

function getUserProfile (req, res) {
  UserModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => console.error(err))

  //console.log(req.originalUrl)  
}
function getOwnProfile (req, res) {
  /*UserModel
  .findById(req.params.id)
  .then(response => res.json(response))
  .catch(err => console.error(err))*/

  console.log(req.originalUrl)
}

function editOwnProfile (req, res) {
  console.log(res.locals.user)
  UserModel
    .findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(response => res.json(response))
    .catch(err => console.error(err))  
}

function editPhoto () {

}

function deleteUserAccount (req, res) {
  /*UserModel
    .findByIdAndDelete(req.params.id)
    .then(response => res.json(response))
    .catch(err => console.error(err))*/

    console.log(req.originalUrl)  
}

module.exports = {
  getUserProfile,
  getOwnProfile,
  editOwnProfile,
  editPhoto,
  deleteUserAccount
}
