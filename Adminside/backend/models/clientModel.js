const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const client = mongoose.model("client", clientSchema);

module.exports = client;