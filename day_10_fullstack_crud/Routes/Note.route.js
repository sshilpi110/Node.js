const express = require("express")
const { noteModel } = require("../model/note.model")
const noteRouter = express.Router()

noteRouter.get("/", async(req, res) => {
    const notes=await noteModel.find()
    res.send(notes)
})

noteRouter.post("/create", async(req, res) => {
    const payload=req.body
    const note=new noteModel(payload)
    await note.save()
    res.send({"msg":"note created"})
})

noteRouter.delete("/delete/:id",async (req, res) => {
    const noteID=req.params.id
    await noteModel.findByIdAndDelete({_id:noteID})
    res.send({"msg" :`note with ${noteID} has been deleted`})
})

noteRouter.patch("/update/:id",async (req, res) => {
    const noteID=req.params.id
    await noteModel.findByIdAndUpdate({_id:noteID})
    res.send({"msg" :`note with ${noteID} has been updated`})
})

module.exports = {
    noteRouter
}