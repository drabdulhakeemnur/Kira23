import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
const app= express()
dotenv.config()

// connect db..
mongoose.connect(process.env.MONGO).then(()=>{
console.log("connected to DB")
}).catch((err)=>{
    console.log(err)
})
// routes
app.use('/api/user', userRouter)

app.listen(3001, ()=>{
    console.log(`Server running on {PORT}`)
})