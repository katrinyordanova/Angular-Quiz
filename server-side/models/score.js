const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    username: {
        type: String
    },
    score: {
        type: Number
    },
    timeSpent: {
        type: String
    }
});

module.exports = mongoose.model('Score', scoreSchema);