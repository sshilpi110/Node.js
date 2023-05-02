

const express = require("express") //import
const fs = require("fs")
const app = express() //this is invoking
app.use(express.json()) // its a middleware


app.get("/", (req, res) => {
    res.send("home page")
})

app.get("/data", (req, res) => {
    const dataStream = fs.createReadStream("./data.json", "utf-8")
    console.log("data has been shared")
    dataStream.pipe(res)

})
app.get("/students", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    console.log(parse_data.students)
    res.send("data is in terminal")
    res.send(parse_data.students)
})

app.get("/teachers", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    console.log(parse_data.Teachers)
    res.send("data is in terminal")
    res.send(parse_data.Teachers)
})

app.post("/adddata", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    parse_data.students.push(req.body)
    fs.writeFileSync("./data.json", JSON.stringify(parse_data))
    console.log(parse_data)
    res.send("look in terminal")

})


app.delete("/delete" ,(req,res)=>{
    const data =fs.readFileSync("./data.json" ,"utf-8")
    const parse_data =JSON.parse(data)

    const delete_student = parse_data.students.filter((el)=>{
        return el.name!=="nayan"
    })
    console.log(delete_student)
    res.send("students data deleted")
})


app.listen(4500, () => {
    console.log("server is running at port 4500")
})