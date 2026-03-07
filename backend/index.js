import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
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

//for alloing json object in req body
  app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/auth",authRoutes);