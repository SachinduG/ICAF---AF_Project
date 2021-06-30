const express = require('express');
const router = express.Router();
const conferenceController = require('../controllers/conferenceController');

module.exports = function () {
    router.post('/create', conferenceController.createConference);
    return router;
}