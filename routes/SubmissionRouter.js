const express = require('express')
const submissionRouter = express.Router()
const Submission = require('../models/submission')



submissionRouter.get('/', (req,res,next) => {
  Submission.find( (err,submission) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(submission)
  })
})



module.exports = submissionRouter