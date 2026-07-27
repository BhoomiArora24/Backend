const express = require('express');
const authController = require('../controller/auth.controller')


const router = express.Router();


/* POST /REGISTER */
router.post("/register" , authController.registerUser);

router.get("/test", (req, res) => {
    console.log("cookies: ", req.cookies)
    res.json({
        message:"Test route",
        cookies: req.cookies
    })
})




module.exports = router;