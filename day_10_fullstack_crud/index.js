

const express = require("express")
const { connection } = require("./db")
const {userRouter}=require("./Routes/user.routes")
const {userModel}=require("./model/user.model")
const {noteRouter}=require("./Routes/Note.route")
const {authenticate}=require("./Middleware/authetication.middleware")
const {noteModel}=require("./model/note.model")
const cors=require("cors")
const app = express() //invoking
app.use(cors())
app.use(express.json()) //middleware
app.use("/users",userRouter)
app.use("/notes",noteRouter)
app.use(authenticate)



app.get("/",(req,res)=>{
    res.send("this is home page")
})
//localhost:8080/users/register

app.listen(8080, async () => {
    try {
        await connection
        console.log("connected to db")

    } catch (err) {
        console.log(err.message)
    }
    console.log("server is running at port 8080")

})