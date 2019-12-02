const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  },
  quiz_id: {
    type: String,
    
  },
  Student_id: {
    type: String,
  },
  
})

module.exports = mongoose.model('Question', questionSchema)