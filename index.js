const express = require("express")
const fs = require("fs")

const app = express() // here i am invoking
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home page ")
})

app.get("/data", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    console.log("data has been shared")
    res.send(parse_data)
})

app.get("/students", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    console.log(parse_data.students)
    res.send("data is in terminal")

})

app.get("/teachers", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    console.log(parse_data.teachers)
    res.send("teachers data is in terminal")

})



   app.post("/adddatastudent", (req, res)=>{

    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    parse_data.students.push(req.body)
    fs.writeFileSync("./data.json", JSON.stringify(parse_data))

    res.send("data has been added,data is in terminal")
})


app.post("/adddatateacher", (req, res)=>{

    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    parse_data.teachers.push(req.body)
    fs.writeFileSync("./data.json", JSON.stringify(parse_data))

    res.send("data has been added,data is teachers file")
})

app.delete("/delete",(req,res)=>{
    const data=fs.readFileSync("./data.json","utf-8")
    const parse_data=JSON.parse(data)
    const new_student_data= parse_data.students.filter((el)=>{
        return el.name!=="shilpi"
    })
    fs.writeFileSync("./data.json",JSON.stringify(parse_data))
   console.log(new_student_data)
   res.end("data has been deleted")

})



app.listen(4500,()=>{
    console.log("server is running at port 4500")
})