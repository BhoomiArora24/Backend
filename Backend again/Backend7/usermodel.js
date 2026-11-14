const mongoose = require('mongoose')

mongoose.connect(`mongodb://103.211.15.134/32/backend7`)

//mongoose.Schema-- method that has an object inside it 
//it will have all the fields u want a user to have
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

module.exports = mongoose.model("user", userSchema);