const express = require('express')
const quizRouter = express.Router()
const Quiz = require('../models/quiz')

const handleRequest = (err,req,res,next,arg) => err ? res.status(500).next(err) : res.status(200).send(arg)
const dataBaseChange = (err,req,res,next,arg) => err ? res.status(500).next(err) : res.status(201).send(arg)

quizRouter.get('/', (req,res,next) => {
  Quiz.find( (err, quizzes) => {
    handleRequest(err,req,res,next,quizzes)
  })
})

quizRouter.get('/teachersquizzes/:teacher', (req,res,next) => {
  Quiz.find({teacher: req.params.teacher}, (err,quizzes) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    res.status(201).send(quizzes)
  })
})

quizRouter.get('/:_id', (req,res,next) => {
  Quiz.findOne( (err,quiz) => {
    handleRequest(err,req,res,next,quiz)
  })
})

quizRouter.post('/', (req,res,next) => {
  const newQuiz = new Quiz(req.body)
    newQuiz.save( (err,quiz) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status.send(quiz)
  })
})

quizRouter.put('/:_id', (req,res,next) => {
  Quiz.findOneAndUpdate({_id: req.params._id}, 
    req.body,
      {new: true},
        (err,quiz) => {
          dataBaseChange(err,req,res,next,quiz)
    })
})

quizRouter.delete('/:_id', (req,res,next) => {
  Quiz.findOneAndDelete({_id: req.params._id}, (err,quiz) => {
    dataBaseChange(err,req,res,next,quiz)
  })
})

module.exports = quizRouter