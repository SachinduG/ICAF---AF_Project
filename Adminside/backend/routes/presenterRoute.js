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
module.exports = router;
