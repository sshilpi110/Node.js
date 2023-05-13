
const express = require("express")
const { userModel } = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")

const userRouter = express.Router()

userRouter.post("/register", async (req, res) => {
    const { name, email, pass } = req.body
    try {
        bcrypt.hash(pass, 5, async (err, hash) => {
            if (err) {
                res.send({ "msg": " something went wrong", "err": err.message })

            } else {
                const user = new userModel({ name, email, pass: hash })
                await user.save()
                res.send({ "msg": "user has been registered" })

            }

        });

    } catch (err) {
        // console.log(err)
        res.send({ "msg": " something went wrong", "err": err.message })

    }

})

userRouter.post("/login", async (req, res) => {
    const { email, pass } = (req.body)
    
    try {
        const user = await userModel.find({ email })
        if (user.length > 0) {
            bcrypt.compare(pass, user[0].pass, (err, result) =>{
                if(result){
                    let token=jwt.sign({userID:user[0]._id},"masai")

                    res.send({ "msg": "login successfully", "token": token })
                }else{
                    res.send({"msg":"wrong credentials"})
                }

            })
        } else {
            res.send({ "msg": "something went wrong " })

        }

    } catch (err) {
        res.send({ "msg": "something wrong", "err": err.message })

    }
})

module.exports = {
    userRouter
}