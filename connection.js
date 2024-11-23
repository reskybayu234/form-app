import mongoose from "mongoose";
import dotenv from "dotenv";

const env = dotenv.config().parsed;

const connectDB = () => {
    // localhost akan berubah mengikuti server productionnya
    mongoose.connect(env.DB_URI || `mongodb://localhost/${env.DB_NAME}`, {
        dbName: env.DB_NAME
    })

    const conn = mongoose.connection

    conn.on('connected', () => {
        console.log("Connected to MongoDB");
    })

    conn.on('disconnected', () => {
        console.log("Disconnected from MongoDB");
    })

    conn.on('error', (err) => {
        console.error("Error connecting to MongoDB:", err);
    })
}

export default connectDB