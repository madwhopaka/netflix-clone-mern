import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        console.log(process.env.MONGODB_URI) ;
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb connected:", conn.connection.host)
    } catch (error) {
        console.log("mongodb failed:",error.message )
        process.exit(1)
    }
}