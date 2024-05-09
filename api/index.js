import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'

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
app.use(cookieParser())

// routes
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
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
const PORT=process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})