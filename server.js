const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 4444

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/LMS', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,

}, console.log('db is connected...'))


app.use('/quiz', require('./routes/quizRouter'))
app.use('/question', require('./routes/questionRouter'))
app.use('/submission', require('./routes/submissionRouter'))
app.use('/user', require('./routes/userRouter'))


app.use( (err,req,res,next) => {
  console.log(err)
  err.name ? res.status(err.status) : null
  res.send({errMsg: err.message})
})



app.listen(PORT, () => {
  console.log(`app is love on ${PORT}`)
})
