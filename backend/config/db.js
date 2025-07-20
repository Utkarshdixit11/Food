import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true,
        });
        console.log(" MongoDB Connected Successfully");
    } catch (err) {
        console.error(" MongoDB Connection Failed:", err.message);
        process.exit(1);
    }}
