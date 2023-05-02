

const express= require("express")

const app= express() 
app.use((req,res,next)=>{

    console.log("middleware")
    next()
})

app.get("/" ,(req,res)=>{
    console.log("home page")
    res.send("Home page")
})

app.get("/about" ,(req,res)=>{
    console.log("home pge")
    res.end("ABOUT PAGE")
})

app.get("/contact" ,(req,res)=>{
    console.log("contact page")
    res.end("CONTACT PAGE")
})

app.get("/data",(req,res)=>{
    console.log("data added")
    res.end("data has been added")
})

app.listen(4500,()=>{
    console.log("server is running at port 4500")
})