const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quizSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    required: true
  }
  
})

module.exports = mongoose.model('Quiz', quizSchema)