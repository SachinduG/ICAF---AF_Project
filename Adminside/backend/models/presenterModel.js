const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const presenterSchema = new mongoose.Schema(
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
        mobile: {
            type: String,
            required: true,
            trim: true,
            maxlength: 10,
        },
        admin: { type: ObjectId, required: true },
    },
    {
        timestamps: true,
    }
);

const presenter = mongoose.model("presenter", presenterSchema);

module.exports = presenter;
