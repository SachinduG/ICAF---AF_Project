const mongoose = require("mongoose");

const attendeeSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
    },
    lname: {
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
    mobile: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10,
    },
});

const attendee = mongoose.model("attendee", attendeeSchema);

module.exports = attendee;
