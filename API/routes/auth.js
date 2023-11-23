import express from "express";

const router = express.Router();

router.get("/", (req, res) =>{
    res.send("Hello this my first auth for me!");
})

router.get("/register", (req, res) =>{
    res.send("Hello this my first register for me!");
})

export default router