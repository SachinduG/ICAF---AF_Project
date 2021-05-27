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

//update
router.put("/:id", auth, async (req, res) => {
    try {
        const { fname, lname, email, mobile } = req.body;
        const attendeeId = req.params.id;

        // validation
        if (!email && !mobile) {
            return res.status(400).json({
                errorMessage: "You need to enter at least a email or mobile.",
            });
        }

        if (!attendeeId)
            return res.status(400).json({
                errorMessage: "Attendee ID not given.",
            });

        const originalAttendee = await attendee.findById(attendeeId);
        if (!originalAttendee)
            return res.status(400).json({
                errorMessage:
                    "No attendee with this ID was found.",
            });

        if (originalAttendee.user.toString() !== req.user)
            return res.status(401).json({ errorMessage: "Unauthorized." });

        originalAttendee.fname = fname;
        originalAttendee.lname = lname;
        originalAttendee.email = email;
        originalAttendee.mobile = mobile;

        const savedAttendee = await originalAttendee.save();

        res.json(savedAttendee);
    } catch (err) {
        res.status(500).send();
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        const attendeeId = req.params.id;

        // validation

        if (!attendeeId)
            return res.status(400).json({
                errorMessage: "Attendee ID not given.",
            });

        const existingAttendee = await attendee.findById(attendeeId);
        if (!existingAttendee)
            return res.status(400).json({
                errorMessage:
                    "No attendee with this ID was found.",
            });

        if (existingAttendee.user.toString() !== req.user)
            return res.status(401).json({ errorMessage: "Unauthorized." });

        await existingAttendee.delete();

        res.json(existingAttendee);
    } catch (err) {
        res.status(500).send();
    }
});

module.exports = router;
