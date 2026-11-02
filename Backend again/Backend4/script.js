
//session cookies
// //frontend se data jb backend me jat h to vo data sara mixed hoke unreadable stream ke form m jata h jise we call blob
//no we need to handle this to make blob in readable form
//its not the correct way just for understanding coz blob is not actually this
const express = require('express')
const app = express()

//to make data readable
app.use(express.json())
app.use(express.urlencoded({extended: true}))

