const mongoose = require("mongoose");

const attendeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    contactNumber: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },

});

const attendee = mongoose.model("attendee", attendeeSchema);

module.exports = attendee;
