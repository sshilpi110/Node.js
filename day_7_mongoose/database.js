const mongoose = require("mongoose")

// const database=()=>{
//     const connection=mongoose.connect("mongodb://127.0.0.1:27017/")
//     console.log("connected to mongo")

// }

// database() //synchronous function

const database = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/")
        console.log("connected to mongo")
        connection.disconnect()
        console.log("disconnected")
    } catch (err) {
        console.log(err)
    }
}

// database()


const main = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/backened")
        console.log("connected to database")
        // await StudentModel.insertMany([{ name: "shilpi", age: 22, city: "patna" }, { name: "nayan", age: 45, city: "Delhi" }])
        const student=new StudentModel({
            name:"vijay cha",
            age:23,
            city:"gandhipur"
        })
        await student.save()
        console.log("inserted the data")
        
        console.log("following is the data from db")
        const students=await StudentModel.find({$and:[{age:{$gte:22}},{age:{$lte:45}}]})//to get the data from db to vs trminal
        console.log(students)
        connection.disconnect()
        console.log("disconnected")

    } catch (err) {
        console.log(err)
    }
}
main() 

const StudentSchema = mongoose.Schema({
    name: String,
    age: Number,
    city: String
})

const StudentModel = mongoose.model("student", StudentSchema)