const mongoose = require('mongoose')
const Schema = mongoose.Schema

const submissionSchema = new Schema({
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
  }
  
})

module.exports = mongoose.model('Submission', submissionSchema)


// {
// 	"quiz_id": "",
//   "question_id": "",
//   "student_Uid": "",
//   "students_answer": ""
// }