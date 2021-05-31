const express = require('express')
const router = express.Router()
const Researcher = require('../models/researcherModel')
const auth = require('../middleware/auth')

// @url           POST /researcher/add
// @description   add researcher
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
        const newUser = new Researcher(user)
        await newUser.save()
        res.status(200).send({status: 'User added', user: newUser})
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
})

// @url           GET /researcher/
// @description   get all researchers
// @access-mode   private
router.get('/', auth, async (req, res) => {
    try {
        const users = await Researcher.find()
        res.status(200).send({status: 'Fetched users', user: users})
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
})

// @url           PUT /researcher/update/:id
// @description   update researcher
// @access-mode   private
router.put('/update/:id', auth, async(req, res) => {
    const userID = req.params.id
    try {
        const {fname, lname, mobile} = req.body
        const user = await Researcher.findOneAndUpdate(userID, {fname: fname, lname: lname, mobile: mobile})
        res.status(200).send({status: 'Todo Updated', updatedUser: user})
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
})

// @url           DELETE /researher/delete/:id
// @description   delete researcher
// @access-mode   private
router.delete('/delete/:id', auth, async(req, res) => {
    const userID = req.params.id
    try {
        const deleteUser = await Researcher.findByIdAndDelete(userID)
        res.status(200).send({status: 'User Deleted', deletedUser: deleteUser})
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
})

module.exports = router
