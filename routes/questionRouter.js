const express = require('express')
const questionRouter = express.Router()
const Question = require('../models/question')

const handleRequest = (err,req,res,next,arg) => err ? res.status(500).next(err) : res.status(200).send(arg)


questionRouter.get('/', (req,res,next) => {
  Question.find( (err,question) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(question)
  })
})

questionRouter.post('/', (req,res,next) => {
  console.log(req.body)
  const newQuestion = new Question(req.body)
  
  newQuestion.save( (err,question) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(question)
  })
})

module.exports = questionRouter