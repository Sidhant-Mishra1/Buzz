import mongoose from "mongoose";
import dotenv from 'dotenv';

const connectToMongoDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('CONNECTED TO MONGODB')
    } catch (error) {
        console.log('ERROR CONNECTING TO MONGODB',error.message)
    }
}
export default connectToMongoDB;