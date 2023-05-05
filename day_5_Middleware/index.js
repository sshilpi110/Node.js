
const express=require("express")
 const app= express() //invoking

 

app.get("/",(req,res)=>{
    console.log("home page")
    res.send("Home page")
})


app.use((req,res,next)=>{

    console.log("hello from middleware")
    if(req.url==="/about"){
    next()
    }
    else{
        res.send("not permitted")
    }
    console.log("by middleware")
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