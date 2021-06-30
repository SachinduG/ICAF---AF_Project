const mongoose = require("mongoose");

const presenterSchema = new mongoose.Schema({
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
    university: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    department: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },

});

const presenter = mongoose.model("presenters", presenterSchema);

module.exports = presenter;
