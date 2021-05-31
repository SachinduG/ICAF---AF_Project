const express = require('express')
const router = express.Router()
const Attendee = require('../models/attendeeModel')
const auth = require('../middleware/auth')

// @url           POST /attendee/add
// @description   add attendee
// @access-mode   private
router.post('/add', auth, async (req, res) => {
    try {
        const {fname, lname, email, mobile} = req.body
        const user = {
            fname: fname,
            lname: lname,
            email: email,
            mobile: mobile,
        }
        const newUser = new Attendee(user)
        await newUser.save()
        res.status(200).send({status: 'User added', user: newUser})
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
})

// @url           GET /attendee/
// @description   get all attendees
// @access-mode   private
router.get('/', auth, async (req, res) => {
    try {
        const users = await Attendee.find()
        res.status(200).send({status: 'Fetched users', user: users})
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
})

// @url           PUT /attendee/update/:id
// @description   update attendee
// @access-mode   private
router.put('/update/:id', auth, async(req, res) => {
    const userID = req.params.id
    try {
        const {fname, lname, mobile} = req.body
        const user = await Attendee.findOneAndUpdate(userID, {fname: fname, lname: lname, mobile: mobile})
        res.status(200).send({status: 'Todo Updated', updatedUser: user})
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
})

// @url           DELETE /attendee/delete/:id
// @description   delete attendee
// @access-mode   private
router.delete('/delete/:id', auth, async(req, res) => {
    const userID = req.params.id
    try {
        const deleteUser = await Attendee.findByIdAndDelete(userID)
        res.status(200).send({status: 'User Deleted', deletedUser: deleteUser})
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
})

module.exports = router
