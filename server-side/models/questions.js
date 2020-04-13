const mongoose = require('mongoose');

const optionsSchema = new mongoose.Schema({
    firstOption: {
        type: String
    },
    secondOption: {
        type: String
    },
    thirdOption: {
        type: String
    },
    fourthOption: {
        type: String
    }
});

const questionSchema = new mongoose.Schema({
    id: {
        type: String
    },
    question: {
        type: String
    },
    options: [ optionsSchema ],
    answer: {
        type: Number
    }
});

module.exports = mongoose.model('Question', questionSchema);