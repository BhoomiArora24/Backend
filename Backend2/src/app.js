//this file main use is to create server
const express = require("express");

const app = express();

/**
 * 
 * const note = [
 * {
 *   tittle: "My first note";
 *   description: "this is my first note"
 * },
 * {
 *   tittle: "My first note";
 *   description: "this is my first note"
 * }
 * ]
 */

app.use(express.json())//middleware
//as express doesnot have the capability to read the sended data so this middleware adds that ability

const notes = []

// api create kri api ka name h /notes
app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message:"note created successfully"
    })
})

app.get("/notes",(req, res) => {
    res.status(200).json({
        message: "notes recieved successfully",
        notes: notes
    })
})

//: - collan ke bad jo bhi aega vo dynamic rhega
app.delete("/notes/:index", (req, res) => {

    const index = req.params.index

    delete notes[ index ]

    res.status(200).json({
        message: "deleted successfully"
    })
})


app.patch("/notes/:index", (req, res) => {
    const index = req.params.index
    const description = req.body.description
    const tittle = req.body.tittle

    notes[index].description = description
    notes[index].tittle = tittle

    res.status(200).json({
        message:"note updated successfully",
        notes: notes
    })
})



module.exports = app