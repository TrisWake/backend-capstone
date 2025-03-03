const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const productRouter = require('./routes/product/model/productRouter')
const userRouter = require('./routes/users/userRouter')
const cors = require('cors')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(cors())
app.use('/api/products', productRouter)
app.use('/api/user', userRouter)

module.exports = app