const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quizSchema = new Schema({
  name: {
    type: String,
    
  },
  teacher: {
    type: String,
    
  }
  
})



module.exports = mongoose.model('Quiz', quizSchema)