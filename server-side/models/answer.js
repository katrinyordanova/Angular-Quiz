const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({ 
    answerIds: Array
});


module.exports = mongoose.model('Answer', answerSchema);