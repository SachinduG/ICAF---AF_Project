const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true},
    passwordHash: {type: String, required: true},
});

const User = mongoose.model("admin", userSchema);

module.exports = User;
