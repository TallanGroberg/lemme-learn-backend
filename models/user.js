const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    
  },
  firebaseUid: {
    type: String,
    required: true
  },
  teacher: {
    type: Boolean
  },
  yourTeachers: {
    type: Array
  }
  
})

module.exports = mongoose.model('User', userSchema)