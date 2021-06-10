const mongoose = require("mongoose");

const attendeeSchema = new mongoose.Schema(
    {
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

        contact: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        university: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        passwordHash: {
            type: String,
            required: true,
        },
    }
);

const attendee = mongoose.model("attendee", attendeeSchema);

module.exports = attendee;
