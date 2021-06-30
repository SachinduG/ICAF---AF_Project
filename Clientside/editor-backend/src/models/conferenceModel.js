const mongoose = require('mongoose');

const ConferenceSchema = new mongoose.Schema({
    con_title: { type: String, required: true, trim: true},
    con_startdate: { type: Date, required: true, trim: true },
    con_enddate: { type: Date, required: true, trim: true },
    con_starttime: { type: String, required: true, trim: true },
    con_venue: { type: String, required: true, trim: true },
    con_type: { type: String, required: true, trim: true },
    con_des: { type: String, required: true, trim: true },
}, { timestamps: true });

const Conference = mongoose.model('conferences', ConferenceSchema);
module.exports = Conference;