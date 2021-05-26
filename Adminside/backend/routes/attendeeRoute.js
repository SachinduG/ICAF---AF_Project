const router = require("express").Router();
const attendee = require("../models/attendeeModel");
const auth = require("../middleware/auth");

router.get("/", auth, async(req, res) => {
    try{
        const attendees = await  attendee.find();
        res.json(attendees);
    }catch (err){
        console.error(err);
        res.status(500).send();
    }
});
module.exports = router;
