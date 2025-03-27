const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const userRouter = require('./routes/users/userRouter')
const cors = require('cors')
const TodoRouter = require('./routes/Todo/todoRouter')

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/todo', TodoRouter)

module.exports = app