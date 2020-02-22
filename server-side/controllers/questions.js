const models = require('../models');

module.exports = {
    get: {
        many(req, res, next) {
            models.questions.find()   
            .then((question) => (res.send(question)))
            .catch(next); 
        }
    }
}