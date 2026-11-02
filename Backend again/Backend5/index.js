//dynamic routing
//how to get data coming from frontend at backend route

//setting up parsers for form
//setting up ejs for ejs pages
//frontend jo dikhega hmara i.e - ejs
//its like an html file only but u can also perform calculations through thhis <%=%>
//setup ejs as a view engine for view

//setting up public static files 

//dynamic routing- we see some routes unme sirf ek hi hissa change hota h
//--/author/harsh
//--/author/harshita
//--/author/navya
//agar route ko dynamic bnana h to dynamic route ko find kro or uske age collan lgado to it becomes dynamic

//params-- aisa kuch bhi jiske age collan h is req.params

const express = require('express')
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, 'public')))//saying hr request k liye static files yha dhundna in public folder
app.set('view engine', 'ejs')

//these are the parses for form 
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.render('index')
})

//dynamic routing
app.get('/profile/:username', function(req, res){
    res.send(`Hey ${req.params.username}`)
})

app.get('/author/:username/:age', function(req, res){
    res.send(`Hey ${req.params.username} , ${req.params.age}`)
})

app.listen(3000, function(){
    console.log('working')
})