const UserModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function signUp (req, res) {
  const hashedPassword = bcrypt.hashSync(req.body.user_password, 10)
  UserModel
    .create({
      username: req.body.user_username,
      email: req.body.user_email,
      password: hashedPassword
    })
    .then(user => {
      const userData = { id: user._id, email: user.email }
      const token = jwt.sign(userData, process.env.SECRET)
      res.json({ token, ...userData })
    })
    .catch(error => res.status(403).json({ error: error }))
}

function logIn (req, res) {
  UserModel
    .findOne({ email: req.body.user_email })
    .then(user => {
      if (!user) { res.json({ error: 'Your email and/or password are incorrect!' }) } else {
        if (bcrypt.compareSync(req.body.user_password, user.password)) {
          const userData = { id: user._id, email: user.email }
          const token = jwt.sign(userData, process.env.SECRET, { expiresIn: '1h' })
          res.json({ token, ...userData })
        } else {
          res.json({ error: 'Your email and/or password are incorrect!' })
        }
      }
    })
    .catch(error => res.status(403).json({ error: error.errmsg }))
}

module.exports = { signUp, logIn }
