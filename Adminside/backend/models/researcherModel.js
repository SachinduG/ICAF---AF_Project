const mongoose = require("mongoose");

const researcherSchema = new mongoose.Schema({
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
    },
    university: {
        type: String,
        required: true,
        trim: true,
    },
    department: {
        type: String,
        required: true,
        trim: true,
    },

});

const researcher = mongoose.model("researcher", researcherSchema);

module.exports = researcher;
