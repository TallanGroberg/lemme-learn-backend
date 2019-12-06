const express = require('express')
const gradingRouter = express.Router()
const Grading = require('../models/grading')


console.log('in grading router')




gradingRouter.get('/', (req,res,next) => {
  Grading.find( (err,grading) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(grading)
  })
})

gradingRouter.post('/', (req,res,next) => {
  const newGrade = new Grading(req.body)
  newGrade.save( (err,grading) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(grading)
  })
})



module.exports = gradingRouter