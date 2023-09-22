require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')



mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})

const db = mongoose.connection

db.on('error', (error)=>{console.error(error)})
db.once('open', ()=>{console.log('connect mongo')})

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')

app.use('/main', subscribersRouter)


app.listen(8000, ()=>{
    console.log('server start')
})