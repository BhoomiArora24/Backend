const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

const noteModel = mongoose.model("note", noteSchema)
//to perform crud operations we need to make node Model as it becomes difficult without import PropTypes from 'prop-types'

module.exports = noteModel