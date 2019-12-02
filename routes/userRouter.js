const express = require('express')
const userRouter = express.Router()

const User = require('../models/user')

userRouter.get('/', (req,res) => {
  User.find( (err,users) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(users)
  })
})

userRouter.post('/', (req,res,next) => {
  const newUser = new User(req.body)
  newUser.save( (err,user) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(user)
  })
})

module.exports = userRouter