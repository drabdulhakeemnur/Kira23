import jwt from 'jsonwebtoken'
import { errorHandler } from './error.js'

export const veriftyToken = (req, res,next)=>{
    const token=req.cookies.access_token

    if(!token) return next(errorHandler(401, 'AccessDenied'))
    
        jwt.verify(token, process.env.jwt_SECRET, (err,user)=>{
            if(err) return next(errorHandler(403, 'Forbidden'))
            req.user=user
            next()
        })
}