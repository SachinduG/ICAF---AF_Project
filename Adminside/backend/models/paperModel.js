const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
    title: {
        type: String, require: true,
    },
    createAt: { 
        type: Date,
         required: true
    },
    tags: {
        type: [String]
    },
    html:{
        type: String, 
        required: true
    }
});

module.exports = Paper = mongoose.model("research_paper", paperSchema);