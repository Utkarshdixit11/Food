import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login User
const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await userModel.findOne({email});

        if(!user){
            return res.json({success:false,message:"User Doesn't exits"})
        }

        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({success:false,message:"Password Incorrect"})
        }
        
        const token=createToken(user._id);
        res.json({success:true,token})

    }catch(err){
        console.log(err);
        res.json({success:false,message:"Error"})
    }
}
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user

const registerUser=async(req,res)=>{
    const{name,password,email}=req.body;
    try{
        //Checking is user already exists or not 
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"});
        }
        //validating email foemat and strong password 
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a Valid email"});
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter a Strong Password"});
        }

        //hashing user password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt);
        
        const newUser=new userModel({
            name:name,
            email:email,
            password:hashedPassword,

        })


        const user=await newUser.save()
        const token=createToken(user._id)
        res.json({success:true,token});

    }catch(err){
        console.log(err)
        res.json({success:false,message:"There is a Error"})
    }
}

export {loginUser,registerUser}