const express = require('express')
const app = express()
//middleware: jab bhi server request accept krta hai wha se route ke bich pahochne tak agar aap us request ko bich me rokte ho and kuch perform krte ho to ye element middleware kehlata hai
//always comes before routing

app.use(function(req, res, next){
    console.log("middleware chla")
    next()//to send the request age-
})

//routing
app.get('/', function(req, res){
    res.send('Hello World')
})
app.get('/profile', function(req, res){
    res.send('Hey bro')
})
app.get('/about', function(req, res, next){
    return next(new Error("something went wrong"))//visible on console
})

app.use((err, req, res, next) => {
    console.log("ERROR HANDLER EXECUTED");
    console.error(err.stack)
    res.status(500).send('something broke');//visible on frontend
})

app.listen(3000)//server ko chlana pdega through this