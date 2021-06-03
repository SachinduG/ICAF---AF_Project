const mongoose = require("mongoose");

const attendeeSchema = new mongoose.Schema(
    {
        conferencetitle: {
            type: String,
            required: true,
            trim: true,
        },
        cstartdate: {
            type: String,
            required: true,
            trim: true,
        },
        cenddate: {
            type: String,
            required: true,
            trim: true,
        },
        cstarttime: {
            type: String,
            required: true,
            trim: true,
            maxlength: 10,
        },
        cvenue: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        ctype: {
            type: String,
            required: true,
            trim: true,
            maxlength: 10,
        },
        cdescription: {
            type: String,
            required: true,
            trim: true,
            maxlength: 10,
        }
    },
    {
        timestamps: true,
    }
);

const conference = mongoose.model("conference", conferenceSchema);

module.exports = conference;