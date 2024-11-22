import express from "express";
import apiRouter from "./routes/api.js";
import mongoose from "mongoose";
import connectDB from "./connection.js";

const app = express();

/** 
 * parse application/json
 * parse application/x-www-form-urlencoded
 * parse multipart/form-data
 */
app.use(express.json()); // ini untuk parse application/json agar bisa di akses di body dalam bentuk json
app.use(express.urlencoded({ extended: true })); // ini untuk parse application/x-www-form-urlencoded agar bisa di akses di body dalam bentuk object

app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
})

connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

