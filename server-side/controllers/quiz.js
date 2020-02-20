const models = require('../models');

module.exports = {
    get: {
        many: (req, res, next) => {
            models.quiz.find()   
            .then((quiz) => (res.send(quiz)))
            .catch(next);       
        }
    }
}