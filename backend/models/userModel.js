import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,

    },
    password:{
        type:String,
        require:true,
    },
    cartData:{
        type:Object,
        default:{}
    }},{minimize:false})

const userModel=mongoose.model.user || mongoose.model("user",userSchema);
export default userModel;