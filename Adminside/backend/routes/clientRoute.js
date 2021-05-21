const router = require("express").Router();
const client = require("../models/clientModel");
const auth = require("../middleware/auth");

router.get("/", auth, async(req, res) => {
    try{
        const clients = await  client.find();
        res.json(clients);
    }catch (err){
        console.error(err);
        res.status(500).send();
    }
});
module.exports = router;
