
const express = require("express")
const app = express()
const fs = require("fs")
app.use(express.json())

app.get("/", (req, res) => {
    res.send("home page")
})


app.get("/data", (req, res) => {
    const dataStream = fs.createReadStream("./data.json", "utf-8")
    dataStream.pipe(res)

})

app.get("/students", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    console.log(parse_data.students)
    res.send("All data is in terminal")
    res.send(parse_data.students)
})

app.get("/teachers", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    console.log(parse_data.Teachers)
    res.send("all teachers data is in terminal")
    res.send(parse_data.Teachers)
})

app.post("/adddata", (req, res) => {
    console.log(req.body)
    res.send("data has been added")
})

app.post("/updatestudent", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    parse_data.students.push(req.body)
    fs.writeFileSync("./data.json", JSON.stringify(parse_data))
    res.send("look in terminal")

})

app.delete("/delete", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parse_data = JSON.parse(data)
    const delete_student = parse_data.students.filter((el) => {
        return el.name!=="kuukuu"
    })
    console.log(delete_student)
    res.send("nayan data has been deleted")

})

app.listen(4500, () => {
    console.log("server is running at the port 4500")
})