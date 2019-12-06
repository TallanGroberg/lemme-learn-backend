const express = require('express')
const submissionRouter = express.Router()
const Submission = require('../models/submission.js')



submissionRouter.get('/', (req,res,next) => {
  Submission.find( (err,submission) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(submission)
  })
})

submissionRouter.post('/', (req,res,next) => {
  const newSubmission = new Submission(req.body)
  newSubmission.save( (err,submission) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(submission)
  })
})



module.exports = submissionRouter