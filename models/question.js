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
  Quiz_id: {
    type: Schema.Types.ObjectId,
    ref: "Quiz"
  },
  Student_id: {
    type: String,
  },
  
})

module.exports = mongoose.model('Question', questionSchema)