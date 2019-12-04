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

userRouter.get('/:firebaseUid', (req,res,next) => {
  User.findOne({firebaseUid: req.params.firebaseUid}, (err,user) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(user)
  })
})

userRouter.put('/:firebaseUid', (req,res,next) => {
  User.findOneAndUpdate({firebaseUid: req.params.firebaseUid},
    req.body, 
      {new: true}, 
        (err,user) => {
          if(err) {
            res.status(500)
            return next(err)
          }
          return res.status(201).send(user)
  })
})

module.exports = userRouter