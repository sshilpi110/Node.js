
const express=require("express")

const studentRouter=express.Router()

studentRouter.get("/getstudent",(req,res)=>{
    res.send({"msg":"All the students will be shared"})
}) 

studentRouter.post("/getstudent",(req,res)=>{
    console.log(req.body)
    res.send({"msg":"All the students will be shared"})
}) 
