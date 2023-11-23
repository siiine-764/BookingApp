import express from "express";
import Hotel from "../models/Hotel.js";
const router = express.Router();

router.get("/", async (req, res) =>{
    const newHotel = new Hotel(req.body);
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch{
        res.status(500).json("ssss");
    }
})

//CREATE
// router.post("/", verifyAdmin, createHotel);

//UPDATE
// router.put("/:id", verifyAdmin, updateHotel);
//DELETE
// router.delete("/:id", verifyAdmin, deleteHotel);
//GET

// router.get("/find/:id", getHotel);
//GET ALL
// router.get("/", getHotels);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/room/:id", getHotelRooms); 

export default router