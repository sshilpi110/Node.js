
const express = require("express")
const { connection, StudentModel } = require("./db")
const app = express()   // here i am  invoking 
app.use(express.json())//middleware


app.get("/", (req, res) => {
    res.send("this  is home page")
})


// app.post("/register",async(req,res)=>{
//     try{

//         const user =new UserModel(req.body)
//         await user.save()
//         res.send(`msg: "user has been registered"`)
//     }catch(err){
//         console.log(err)
//         res.send({"msg":"can not registered","error":err.message})
//     }

// })

app.get("/users1", async (req, res) => {
    let query = req.query
    try {
        const users = await StudentModel.find(query)
        res.send(users)
        res.send("data has been displayed")
    } catch (err) {
        console.log(err)
        res.send({ "msg": "can not get the users", "err": err.message })
    }
})

app.post("/manydata", async (req, res) => {
    try {
        const users = new StudentModel(req.body)
        await users.save()
        res.send(users)
    } catch (err) {
        res.send({ "msg": "can not registered the data", "err": err.message })
        console.log(err)
    }
})

app.patch("/update/:id", async (req, res) => {
    const ID = req.params.id
    const payload = req.body
    try {
        await StudentModel.findByIdAndUpdate({ _id: ID }, payload)
        //  res.send(users)
        res.send({ "msg": "user has been updated" })
    } catch (err) {
        res.send({ "msg": "can not updated", "err": err.message })
        console.log(err)
    }
})

app.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id

    try {
        await StudentModel.findByIdAndDelete({ _id: ID })
        res.send({ "msg": "user has been deleted" })

    } catch (err) {
        console.log(err)
        res.send({ "msg": "can not updated", "err": err.message })

    }
})
app.listen(4500, async () => {
    try {
        await connection
        console.log("connected to db")
    } catch (err) {
        console.log("can not connected to db")
        console.log(err)
    }
    console.log("server running at port 4500")

})