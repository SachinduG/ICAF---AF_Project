const router = require("express").Router();
const User = require("../models/userModel");

router.post("/", async (req, res) => {
    try {
        const {email, password, passwordVerify} = req.body;

        //validation
        if (!email || !password || !passwordVerify) {
            return res
                .status(400)
                .json({errorMessage: "Please enter all required fields."});
        }
        if(password.length < 8){
            return res
                .status(400)
                .json({errorMessage: "Please enter a password of at least 8 characters."});
        }if(password !== passwordVerify){
            return res
                .status(400)
                .json({errorMessage: "Please enter the same password twice."});
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res
                .status(400)
                .json({errorMessage: "An account with this email already exists."});
        }

    }catch(err){
            console.error(err);
            res.status(500).send();
    }
});

module.exports = router;