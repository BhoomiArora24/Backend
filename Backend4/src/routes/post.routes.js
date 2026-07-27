const express = require('express');
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model")

const router = express.Router();

router.post("/create", async (req, res) => {
    const token = req.cookies.token;


    if(!token){
        res.status(401).json({
            message: "Unauthorized"
        })
    }
    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);//it is an object that stores iit time at which it is created and id as while creating token we create some id so it stores that id too 
        //and it consoles that when gets verified
        //like this: { id: '6a6754d5a3d1b38fff4e00d0', iat: 1785156821 }

        const user = await userModel.findOne({
            _id: decoded.id
        })

        console.log(user);//gives the user also who created the post
        //{
//   _id: new ObjectId('6a6754d5a3d1b38fff4e00d0'),
//   username: 'navya',
//   email: 'navya@gmail.com',
//   password: 'qwer',
//   __v: 0
// }


    }catch(err){
        return res.status(401).json({
            message: "Token is Invalid"
        })
    }

    res.send("Post created Successfully")
})


module.exports =  router;