

const express = require("express")
const jwt = require('jsonwebtoken')
const { connection } = require("./db")
const { userModel } = require("./model/user.model")

const app = express()  //here invoking
app.use(express.json())     //here middleware

app.get("/", (req, res) => {
    res.send("this is home page")
})
// registered
app.post("/register", async (req, res) => {
    const userDetail = req.body
    try {
        const users = new userModel(userDetail)
        await users.save()
        res.send({ "msg": "user registered" })
    } catch (err) {
        console.log(err)
        res.send({ "msg": "user not registered", "err": err.message })

    }
})

// login function

app.post("/login", async (req, res) => {

    const { email, pass } = req.body
    const token = jwt.sign({ class: 'authorization' }, "shilpi")
    try {
        const users = await userModel.find({ email, pass })
        if (users.length > 0) {

            res.send({ "msg": "login successfully", "token": token })
        } else {

            res.send({ "msg": "wrong credential" })
        }

    } catch (err) {
        console.log(err)
        res.send({ "msg": "something went wrong", "err": err.message })


    }
})
//verification.......

app.get("/data", (req, res) => {
    const token = req.headers.authorization
    jwt.verify(token, 'shilpi', function (err, decoded) {
        if (decoded) {
            res.send({ "msg": " data is here..." })

        } else {
            res.send({ "msg": "something went wrong", "err": err.message })

        }
    });

})

app.get("/cart",(req,res)=>{
    const token=req.headers.authorization
    jwt.verify(token,"shilpi",(err,decoded)=>{
        if(decoded){
            res.send({ "msg": " cart_data is here..." })

        }else{
            res.send({ "msg": "something went wrong", "err": err.message })

        }
    })
})

app.listen(8080, async () => {
    try {
        await connection
        console.log("connected to db")
    } catch (err) {
        console.log(err)
    }
    console.log("server is running at port 8080")
})