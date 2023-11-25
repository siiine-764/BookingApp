import express from "express";

const router = express.Router();

router.get("/", (req, res) =>{
    res.send("router rooms");
    // console.log("Im a rooms"); 
})


export default router