import express from "express";
import Hotel from "../models/Hotel.js";
const router = express.Router();

//CREATE
router.post("/", async (req, res) =>{
    const newHotel = new Hotel(req.body);
    try{
        const savedHotel = await newHotel.save();
        //Success Responses
        res.status(200).json(savedHotel);
    }catch(err){
        //Server Error Responses
        res.status(500).json(err);
    }
})

//UPDATE
router.put("/:id", async (req, res) =>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, 
            {$set: req.body},
            {new: true})
        //Success Responses
        res.status(200).json(updateHotel);
    }catch(err){
        //Server Error Responses
        res.status(500).json(err );
    }
})

//DELETE
router.delete("/:id", async (req, res) =>{
    try{
        const deleteHotel = await Hotel.findByIdAndDelete(req.params.id);
        //Success Responses
        res.status(200).json("Hotel h as been deleted.");
    }catch(err){
        //Server Error Responses
        res.status(500).json(err);
    }
})

//GET
router.get("/:id", async (req, res) =>{
    try{
        const hotels = await Hotel.findById(req.params.id);
        //Success Responses
        res.status(200).json(hotels);
    }catch(err){
        //Server Error Responses
        res.status(500).json(err);
    }
})

//GET ALL
router.get("/", async (req, res, next) =>{
    console.log("Im a Hotel");
    try{
        const getHotel = await Hotel.find();
        //Success Responses
        res.status(200).json(getHotel);
    }catch(err){
        //Server Error Responses
        res.status(500).json(err);
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