const express = require('express');
const router = express.Router();
const Researcher = require('../models/researcherModel');
const auth = require('../middleware/auth');

// @url           POST /researcher/add
// @description   add researcher
// @access-mode   private
router.post('/', auth, async (req, res) => {
    const {fname, lname, email, mobile} = req.body
    try {
        const newUser = new Researcher({
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

// @url           GET /researcher/
// @description   get all researchers
// @access-mode   private
router.get('/', auth, async (req, res) => {
    try {
        const users = await Researcher.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('server error');
        console.log(err.message);
    }
})

// @url           PUT /researcher/:id
// @description   update researcher
// @access-mode   private
router.put('/:id', auth, async(req, res) => {
    const {fname, lname, mobile} = req.body

        //build user object
        const userFields={};
        if(fname)userFields.fname=fname;
        if(lname)userFields.lname=lname;
        if(mobile)userFields.mobile=mobile;
    try {
        let user = await Researcher.findById(req.params.id);

        if(!user) return res.status(404).json({
            msg: 'User not found'
        });

        user = await Researcher.findByIdAndUpdate(req.params.id,
            {$set:userFields},
            {new:true});
            res.json(user);
    } catch (err) {
        res.status(500).send(err.message)
        console.log(err.message)
    }
})

// @url           DELETE /researcher/:id
// @description   delete researcher
// @access-mode   private
router.delete('/:id', auth, async(req, res) => {
    try {
        let user = await Researcher.findById(req.params.id);

        if(!user) return res.status(404).json({
            msg: 'User not found'
        });
        
        await Researcher.findByIdAndRemove(req.params.id);
        res.json({msg: 'User removed.'});
    } catch (err) {
        res.status(500).send(err.message)
        console.log(err.message)
    }
});

module.exports = router;
