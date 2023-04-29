const express = require("express")

const fs = require("fs")

const app = express(); //invoking 
app.use(express.json())  // invoking the middleware for post

app.get("/", (req, res) => {
    res.end("Home Page")
})


app.get("/", (req, res) => {
    req.setHeader("content-type", "text/html")
    res.end("<h1>I am created home page<h1/>")
})


app.get("/data", (req, res) => {
    const dataStream = fs.createReadStream("./data.json", "utf-8")
    dataStream.pipe(res)
})


app.post("/adddata",(req,res)=>{
    console.log(req.body)
    res.end("Data has been added")
})

app.get("/students" ,(req,res)=>{
     const data=fs.readFileSync("./data1.json" ,"utf-8")
     const parse_data=JSON.parse(data)

     console.log(parse_data.students)
     res.send("data in terminal")
})

app.get("/teachers" ,(req,res)=>{
    const data =fs .readFileSync("./data2.json" ,"utf-8")
    const parsed_data= JSON.parse(data)
    console.log(parsed_data.teachers)
    res.end("teachers data in terminal")
})

app.post("/addTeachers" ,(req,res)=>{
    const data = fs.readFileSync("./data2.json" ,"utf-8")
    const parse_data= JSON.parse(data)
    parse_data.teachers.push(req.body)
    fs.writeFileSync("./data2.json" ,JSON.stringify(parse_data))
    console.log(parse_data)
    res.end("look in terminal")
}) 

app.post("/addStudents" ,(req,res)=>{
    const data =fs.readFileSync("./data1.json" ,"utf-8")
    const parse_data = JSON.parse(data)
    parse_data.students.push(req.body)
    fs.writeFileSync("./data1.json" ,JSON.stringify(parse_data))
    console.log(parse_data)
    res.end("it's added in the terminal")
})
app.listen(4700, () => {
    console.log("server is running at port 4700")
})
