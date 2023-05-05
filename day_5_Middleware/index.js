
const express=require("express")
const fs= require("fs")
 const app= express() //invoking

 const routeLogger=(req,res,next)=>{
    const startTime=new Date().getTime()
    next()

    const endTime= new Date().getTime() 

    fs.appendFileSync("./routeDetails.txt",`RouteVisited: ${req.url},method:${req.method} || ResponseTime:${endTime-startTime}ms\n`)
 }
 app.use(routeLogger)

 

app.get("/",(req,res)=>{
    console.log("home page")
    res.send("Home page")
})




    
app.get("/about",(req,res)=>{
    console.log("about page")
    res.send("about page")
})

app.get("/contact",(req,res)=>{
    console.log("contact page")
    res.send("contact page")
})

app.get("/data",(req,res)=>{
    console.log("data page")
    res.send("data page")
})

app.listen(4200,()=>{
    console.log("server is running at port 4200")
})