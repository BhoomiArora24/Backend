const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  //mongoose ka sara code is asynchronous hota h therefore we can use async await overhere
  let createdUser = await userModel.create({
    name: "navya",
    username: "navya",
    email: "navya@gmail.com",
  });

  res.send(createdUser);

  //it will run first as it is synchronous and it is asynchronous as in js synchronous code runs first then asynchronous code runs
  console.log("hey");
});

app.get("/update", async (req, res) => {
  // userModel.findOneUpdate(findone, update, {new: true})

  let updatedUser = await userModel.findOneAndUpdate({
    username: "navya",
  }, {
    name: "navyajj"
  }, {
    new: true
  });

  res.send(updatedUser);
});

app.get('/read', async (req, res) => {
    let findUsers = await userModel.find()
    //to find any particular user
    // let findUsers = await userModel.find({username: 'navyajj'})
    ///find hmesha hme array dega no matter even one user exists or not 
    //and findOne gives us an object

    res.send(findUsers)
})

app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({name: 'navyajj'})

    res.send(`Hey ${deletedUser} your account has been deleted`)
})

app.listen(3000);
