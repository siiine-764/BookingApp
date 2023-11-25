import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

//lRBXb6e6btrNGSvQ
// yassinepro764

import { promises as fsPromises } from 'fs';

const app = express();
const port = 8800;
app.use(express.json())

// Read JSON file
app.get('/read-json', async (req, res) => {
  try {
    const data = await fsPromises.readFile('data.json', 'utf8');
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error reading JSON file');
  }
});
   

// Edit JSON file
app.post('/edit-json', async (req, res) => {
  try {
    // Read the existing data
    const data = await fsPromises.readFile('data.json', 'utf8');
    const jsonData = JSON.parse(data);

    // Modify the data (for example, add a new user)
    const newUser = req.body; // Assuming the request body contains the new user data
    jsonData.push(newUser);

    // Write the modified data back to the file
    await fsPromises.writeFile('data.json', JSON.stringify(jsonData, null, 2), 'utf8');

    res.json({ success: true, message: 'JSON file updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error editing JSON file');
  }
});



// const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.... ++");
  } catch (error) {
    throw error;
  }
};

app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
 
app.listen(port, () => {
    connect();
    console.log(`Server is running on port ${port}...`);
    console.log("Connected to backend");
  });