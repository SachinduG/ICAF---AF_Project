const router = require("express").Router();
const presenter = require("../models/presenterModel");
const auth = require("../middleware/auth");

router.get("/", auth, async(req, res) => {
    try{
        const presenters = await  presenter.find();
        res.json(presenters);
    }catch (err){
        console.error(err);
        res.status(500).send();
    }
});

//update
router.put("/:id", auth, async (req, res) => {
    try {
        const { fname, lname, email, mobile } = req.body;
        const presenterId = req.params.id;

        // validation
        if (!email && !mobile) {
            return res.status(400).json({
                errorMessage: "You need to enter at least a email or mobile.",
            });
        }

        if (!presenterId)
            return res.status(400).json({
                errorMessage: "Presenter ID not given.",
            });

        const originalPresenter = await presenter.findById(presenterId);
        if (!originalPresenter)
            return res.status(400).json({
                errorMessage:
                    "No presenter with this ID was found.",
            });

        if (originalPresenter.user.toString() !== req.user)
            return res.status(401).json({ errorMessage: "Unauthorized." });

        originalPresenter.fname = fname;
        originalPresenter.lname = lname;
        originalPresenter.email = email;
        originalPresenter.mobile = mobile;

        const savedPresenter = await originalPresenter.save();

        res.json(savedPresenter);
    } catch (err) {
        res.status(500).send();
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        const presenterId = req.params.id;

        // validation

        if (!presenterId)
            return res.status(400).json({
                errorMessage: "Presenter ID not given.",
            });

        const existingPresenter = await presenter.findById(presenterId);
        if (!existingPresenter)
            return res.status(400).json({
                errorMessage:
                    "No presenter with this ID was found.",
            });

        if (existingPresenter.user.toString() !== req.user)
            return res.status(401).json({ errorMessage: "Unauthorized." });

        await existingPresenter.delete();

        res.json(existingPresenter);
    } catch (err) {
        res.status(500).send();
    }
});

module.exports = router;
