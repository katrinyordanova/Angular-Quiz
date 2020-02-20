const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    id: {
        type: String
    },
    question: {
        type: String
    },
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
    },
    answer: {
        type: String
    }
});

module.exports = mongoose.model('Quiz', quizSchema);