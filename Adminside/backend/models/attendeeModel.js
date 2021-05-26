const mongoose = require("mongoose");

const attendeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const attendee = mongoose.model("attendee", attendeeSchema);

module.exports = attendee;
