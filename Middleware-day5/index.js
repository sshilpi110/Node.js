const express=require("express")
const app=express() 
app.use((req,res,next)=>{
    console.log("hello from middleware")
    next()
    console.log("Bye midddleware")
})

app.get("/" ,(req,res)=>{
    console.log("home page")
    res.send("home page")
})


app.get("/about" ,(req,res)=>{
    console.log("about page")
    res.send("about page")
}) 
app.get("/contact" ,(req,res)=>{
    console.log("contact page")
    res.send("contacts page")
})
app.get("/data" ,(req,res)=>{
    console.log("data shared")
    res.send("data will be shared")
})
app.listen(4200,()=>{
    console.log("server is runnig at port 4200")
})