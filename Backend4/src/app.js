const express = require('express');
const authRoutes = require("./routes/auth.routes")
const cookieParser = require("cookie-parser")
const postRoutes = require("./routes/post.routes.js")



const app = express();

app.use(express.json());
app.use(cookieParser());//is an Express middleware that reads cookies sent by the browser and makes them available in req.cookies.


//API/AUTH IS PREFIX
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);


module.exports = app;