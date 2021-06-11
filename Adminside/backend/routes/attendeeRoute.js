const express = require('express')
const router = express.Router()
const Attendee = require('../models/attendeeModel')
const auth = require('../middleware/auth')

// @url           GET /attendee/
// @description   get all attendees
// @access-mode   private
router.get('/', auth, async (req, res) => {
    try {
        const users = await Attendee.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('server error');
        console.log(err.message);
    }
})
// @url           PUT /attendee/update/:id
// @description   update attendee
// @access-mode   private
router.put('/:id', auth, async(req, res) => {
    const {fname, lname, contact, university} = req.body

        //build user object
        const userFields={};
        if(fname)userFields.fname=fname;
        if(lname)userFields.lname=lname;
        if(contact)userFields.contact=contact;
        if(university)userFields.university=university;
        
    try {
        let user = await Attendee.findById(req.params.id);

        if (!fname && !lname && !contact && !university) 
            return res.status(400).json({
              errorMessage: "You need to update at least a input field",
            });

        if (fname.length < 3)
            return res.status(400).json({
                errorMessage: "Please enter a first name of at least 3 characters.",
            });

        if (lname.length < 3)
            return res.status(400).json({
                errorMessage: "Please enter a last name of at least 3 characters.",
            });

        if (contact.length < 10)
            return res.status(400).json({
            errorMessage: "Please enter a mobile number of at least 10 characters.",
        });    

        if(!user) return res.status(404).json({
            msg: 'User not found'
        });

        user = await Attendee.findByIdAndUpdate(req.params.id,
            {$set:userFields},
            {new:true});
            res.json(user);

    } catch (err) {
        res.status(500).send(err.message)
        console.log(err.message)
    }
})

// @url           DELETE /attendee/delete/:id
// @description   delete attendee
// @access-mode   private
router.delete('/:id', auth, async(req, res) => {
    try {
        let user = await Attendee.findById(req.params.id);

        if(!user) return res.status(404).json({
            msg: 'User not found'
        });
        
        await Attendee.findByIdAndRemove(req.params.id);
        res.json({msg: 'User removed.'});
    } catch (err) {
        res.status(500).send(err.message)
        console.log(err.message)
    }
});

module.exports = router
