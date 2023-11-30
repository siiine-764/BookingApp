import express from "express";
import Room from "../models/Room.js";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";

const router = express.Router();

//CREATE
router.post("/", createRoom);

//UPDATE
router.put("/:id", updateRoom);

//DELETE
router.delete("/:id", deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);

export default router