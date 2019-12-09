const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quizSchema = new Schema({
  name: {
    type: String,
    
  },
  teacher: {
    type: String,
  },
  completedBy: {
    type: Array
  }
})



module.exports = mongoose.model('Quiz', quizSchema)