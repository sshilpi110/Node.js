
const express = require("express")
const fs = require("fs")

const { routeLogger } = require("./Middlewares/Logger.middleware")

const app = express() //invoking
app.use(routeLogger)


const first=((req,res,next)=>{
    console.log("1")
    next()
    console.log("2")
})
const second=((req,res,next)=>{
    console.log("3")
    next()
    console.log("4")
})
const third=((req,res,next)=>{
    console.log("5")
    next()
    console.log("6")
})
app.use(first,third,second)


app.get("/", (req, res) => {
    console.log("home page")
    res.send("Home page")
})

app.get("/about", (req, res) => {
    console.log("about page")
    res.send("about page")
})

app.get("/contact", (req, res) => {
    console.log("contact page")
    res.send("contact page")
})

app.get("/data", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    console.log(parse_data)
    res.send("data page")
})


app.listen(4200, () => {
    console.log("server is running at port 4200")
})