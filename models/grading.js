const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gradingSchema = new Schema({
  quiz_id: {
    type: String,
  },
  question_id: {
    type: String,
  },
  student_Uid: {
    type: String,
  },
  students_answer: {
    type: String,
  },
  answered_correctly: {
    type: Boolean
  }
})

module.exports = mongoose.model('Grading', gradingSchema)

