
const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/mongoose2_database")

const studentSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    language:{type:String,required:true},
    is_married:{type:Boolean,required:true},
}, 
{
    versionKey: false
})

const StudentModel = mongoose.model("student",studentSchema)



module.exports = {
    connection,
    StudentModel
}