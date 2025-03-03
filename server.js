require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

mongoose
    .connect(process.env.DB_ADDRESS) //The connection
    .then(()=>{
        console.log('MONGODB Connected.')
        app.listen(3000, ()=>{
            console.log('Server started')
        })
    })
    .catch((e)=>{
        console.log(e)
    })
