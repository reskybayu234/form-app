import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(`mongodb://localhost:27017`, {
        dbName: "wegoform"
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