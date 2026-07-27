const express = require('express');

const app = express();//it creates an instance of server which gets stored in a variable

//data that come through frontend is accessed through -- req
//data that we send as response --res
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.listen(3000)//to start a server on port 3000 so that server can communincate 

// npm init -y -- node js initialize
// npm i express-- install express package
