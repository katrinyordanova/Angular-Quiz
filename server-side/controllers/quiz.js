const models = require('../models');

module.exports = {
    get: {
        many:(req, res, next) => {
            models.quiz.find()
            .then((info) => (res.send(info)))
            .catch(next).catch(err => console.log(err));
        }
    }
}