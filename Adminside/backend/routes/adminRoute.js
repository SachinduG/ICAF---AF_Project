const router = require("express").Router();
const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register
router.post("/register", async (req, res) => {
    try {
        const { fname, lname, email, password, passwordVerify } = req.body;

        // validation

        if (!fname || !lname || !email || !password || !passwordVerify)
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields.", });

        if (password.length < 6)
            return res.status(400).json({
                errorMessage: "Please enter a password of at least 6 characters.",
            });

        if (fname.length < 3)
            return res.status(400).json({
                errorMessage: "Please enter a first name of at least 3 characters.",
            });

        if (lname.length < 3)
            return res.status(400).json({
                errorMessage: "Please enter a last name of at least 3 characters.",
            });

        if (password !== passwordVerify)
            return res.status(400).json({
                errorMessage: "Please enter the same password twice.",
            });

        // make sure no account exists for this email
        const existingUser = await Admin.findOne({ email });
        if (existingUser)
            return res.status(400).json({
                errorMessage: "An account with this email already exists.",
            });

        // hash the password

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // save a new user account to the db

        const newUser = new Admin({
            fname,
            lname,
            email,
            passwordHash,
        });

        const savedUser = await newUser.save();

        // sign the token

        const token = jwt.sign(
            {
                id: savedUser._id,
            },
            process.env.JWT_SECRET
        );

        // send the token in a HTTP-only cookie

        res
            .cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none",

            })
            .send();
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

// log in

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // validate

        if (!email || !password)
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });

        const existingUser = await Admin.findOne({ email });
        if (!existingUser)
            return res.status(401).json({ errorMessage: "Wrong email or password." });

        const passwordCorrect = await bcrypt.compare(
            password,
            existingUser.passwordHash
        );
        if (!passwordCorrect)
            return res.status(401).json({ errorMessage: "Wrong email or password." });

        // sign the token

        const token = jwt.sign(
            {
                id: existingUser._id,
            },
            process.env.JWT_SECRET
        );

        // send the token in a HTTP-only cookie

        res
            .cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
            })
            .send();
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.get("/logout", (req, res) => {
    res
        .cookie("token", "", {
            httpOnly: true,
            expires: new Date(0),
            secure: true,
            sameSite: "none",
        })
        .send();
});

router.get("/loggedIn", (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.json(false);

        jwt.verify(token, process.env.JWT_SECRET);

        res.send(true);
    } catch (err) {
        res.json(false);
    }
});

module.exports = router;
