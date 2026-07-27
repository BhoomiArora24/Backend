const mongoose = require("mongoose");

async function connectDB(){

    await mongoose.connect("mongodb+srv://nivi:WapMV6RKcGIeverk@backend-course.lp95xfs.mongodb.net/halley")

    console.log("Connected to DB");
}

module.exports = connectDB