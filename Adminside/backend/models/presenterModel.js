const mongoose = require("mongoose");

const presenterSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const presenter = mongoose.model("presenter", presenterSchema);

module.exports = presenter;
