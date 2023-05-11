
const express = require("express")

const app = express() // invoking
const fs = require("fs")

app.use(express.json()) //middleware

app.get("/", (req, res)=>{
    res.send("Home page")
})
app.get("/data", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    console.log(parse_data)
    res.send("data has been shared")
})

app.get("/students",(req,res)=>{
    const data=fs.readFileSync("./data.json","utf-8")
    const parse_data=JSON.parse(data)
    console.log(parse_data.students)
    res.send("student data has been added")
})

app.get("/teachers",(req,res)=>{
    const data= fs.readFileSync("./data.json","utf-8")
    const parse_data= JSON.parse(data)
    console.log(parse_data.teachers)
    res.send("teachers data has been send")
})

app.post("/newstudentdata",(req,res)=>{
    const data =fs.readFileSync("./data.json","utf-8")
    const parse_data= JSON.parse(data)
    parse_data.students.push(req.body)
    parse_data.teachers.push(req.body)
    

    console.log(parse_data.students)
    console.log(parse_data.teachers)

    res.send("new student data has been added")
    // res.send(parse_data.students)
})

app.post("/updatestudent",(req,res)=>{
    const data=fs.readFileSync("./data.json" ,"utf-8")
    const parse_data= JSON.parse(data)
    parse_data.students.push(req.body)
    fs.writeFileSync("./data.json" ,JSON.stringify(parse_data))
    console.log(parse_data.students)
    res.send("data has been updated in student file")
    
})


app.delete("/delete",(req,res)=>{
    const data= fs.readFileSync("./data.json","utf-8")
    const parse_data= JSON.parse(data)
    const deleted_data=parse_data.students.filter((el)=>{
        return el.name!=="radhika"
    })
    

    console.log(deleted_data.students)
    res.send("data deleted from student file look in terminal")
})


app.post("/adddata",(req,res)=>{
    console.log(req.body)
    res.send("data has been added")
})
app.listen(4500, (req, res) => {
    console.log("server is running at port 4500")
})