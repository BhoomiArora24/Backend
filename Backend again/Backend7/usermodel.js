const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://nivi:WapMV6RKcGIeverk@backend-course.lp95xfs.mongodb.net/chachavidhayak`)

//mongoose.Schema-- method that has an object inside it 
//it will have all the fields u want a user to have
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

module.exports = mongoose.model("user", userSchema);