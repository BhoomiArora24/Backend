const userModel = require('../models/user.model')
const jwt = require("jsonwebtoken")


async function registerUser(req, res) {

    const { username, email, password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message: "User already Exists"
        })
    }


    const user = await userModel.create({//create user
        username, email, password
    })

    const token = jwt.sign(//generate token
        {
            id: user._id
        }, process.env.JWT_SECRET
    );

    res.cookie("token", token);//save token in cookies

    res.status(201).json({
        message:"User created successfully",
        user,
    })
}

module.exports = { registerUser }//an object which has property named registerUser and its value name is registerUser