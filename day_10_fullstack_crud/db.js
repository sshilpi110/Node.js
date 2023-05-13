
const mongoose=require("mongoose") //importing

const connection=mongoose.connect("mongodb://127.0.0.1:27017/fullstack_crud")

module.exports={
    connection
}