const express = require('express')
const router = express.Router()
const Attendee = require('../models/attendeeModel')
const auth = require('../middleware/auth')

// @url           POST /attendee/add
// @description   add attendee
// @access-mode   private
router.post('/', auth, async (req, res) => {
    const {fname, lname, email, mobile} = req.body
    try {
        const newUser = new Attendee({
            fname: fname,
            lname: lname,
            email: email,
            mobile: mobile,
        });

        const user = await newUser.save();
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

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
    const {fname, lname, mobile} = req.body

        //build user object
        const userFields={};
        if(fname)userFields.fname=fname;
        if(lname)userFields.lname=lname;
        if(mobile)userFields.mobile=mobile;
        
    try {
        let user = await Attendee.findById(req.params.id);

        if (!fname && !lname && !mobile) 
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

        if (mobile.length < 10)
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
