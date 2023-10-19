import 'dotenv/config'
import mongoose from "mongoose";

export async function connectMongoClient(){
    await mongoose.connect(process.env.DB_URI!!)
}

export async function disconnectMongoClient(){
    await mongoose.disconnect()
}