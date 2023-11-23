import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";


//lRBXb6e6btrNGSvQ
// yassinepro764

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB....");
  } catch (error) {
    throw error;
  }
};

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
 
app.listen(8800, () => {
    connect();
    console.log("Connected to backend");
  });