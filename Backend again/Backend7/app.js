const express = require('express');
const app = express()

const userModel = require('./usermodel')

app.get('/', (req, res) => {
    res.send("hey")
})

app.get('/create', async (req, res) => {
    //mongoose ka sara code is asynchronous hota h therefore we can use async await overhere
     let createdUser = await userModel.create({
        name: "navya",
        username: "navya",
        email: "navya@gmail.com"
     }
    )

    res.send(createdUser)

    //it will run first as it is synchronous and it is asynchronous as in js synchronous code runs first then asynchronous code runs
    console.log("hey")
})

app.listen(3000)