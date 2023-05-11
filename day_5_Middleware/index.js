
const express = require("express")
const fs = require("fs")

const app = express() //invoking middleware
const { routeLogger } = require("./Middlewares/Logger.middleware")

const { first, third, second } = require("./Middlewares/multiple.middleware")
const { studentRouter } = require("./Routes/stuudents.route")



app.use(routeLogger)  // invoking routemiddleware

app.use(first, third, second)
app.use(cors())
app.use("/student",studentRouter)


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