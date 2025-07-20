import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://utkarshdixit:Zing1242@cluster0.4pjztgx.mongodb.net/food-del").then(()=>console.log("Db Coonnected"));
}