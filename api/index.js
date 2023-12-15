import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.route.js'
const app= express()
dotenv.config()

// connect db..
mongoose.connect(process.env.MONGO).then(()=>{
console.log("connected to DB")
}).catch((err)=>{
    console.log(err)
})
// middlewares
app.use(express.json())

// routes
app.use('/api/user', userRouter)
app.use('/api/user', authRouter)
app.use((err,req,res,next)=>{
    const statusCode= err.statusCode ||500
    const message= err.message || 'internal Server Error'
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})

//server
app.listen(3001, ()=>{
    console.log(`Server running on {PORT}`)
})