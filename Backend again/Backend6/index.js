const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  fs.readdir(`./files`, function (err, files) {//means jb ye file re hojaye uske bad ue fuction chlao
    res.render("index", {files: files});//yha pe hm index.ejs me kuch bhi data bhej skte h like yha hm files ka data bhej rhe h
  });
});

app.listen(3000);
