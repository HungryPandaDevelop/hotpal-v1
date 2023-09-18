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


// КАКОЙ ТО ИНДУС
//mongoose.connect(mongodb://localhost:27017/test_base)
// const UserSchema = new mongoose.Schema({
//     name: String
// })

// const UserModel = mongoose.model("users", UserSchema)

// app.get('/getUsers', (req,res)=>{
//     UserModel.find({}).then((users)=>{
//         res.json(users)
//     }).catch((err)=>{
//         console.log('err', err)
//     })
// })
// КАКОЙ ТО ИНДУС



app.listen(8000, ()=>{
    console.log('server start')
})