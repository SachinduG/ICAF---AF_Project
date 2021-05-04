const router = require("express").Router();
const client = require("../models/clientModel");

router.post("/", async  (req, res) => {
    try{
        const { name } = req.body;

        const newClient = new client({
            name,
        });

        const savedClient = await newClient.save();

        res.json(savedClient);
    }catch (err){
        console.error(err);
        res.status(500).send();
    }
});

module.exports = router;