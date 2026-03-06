import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI) 
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});