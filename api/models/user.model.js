import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:4
    },
    email:{
        type:String,
        required:true,
        unique:true



    }

},{timestamps:true}
)

const User= mongoose.model('User', userSchema)
export default User;