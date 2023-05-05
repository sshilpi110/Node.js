
const express=require("express")
 const app= express() //invoking

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.listen(4200,()=>{
    console.log("server is running at port 4200")
})