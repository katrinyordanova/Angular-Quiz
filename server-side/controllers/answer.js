const models = require('../models');

module.exports = {
    post: (req, res, next)  => {
        const ids = req.body;
        const answerIds = [];

        for(var a = 0; a < ids.length; a++) {
            let index = Number(a);
            answerIds[index] = ids[a]
        }
        models.answer.create({ answerIds })
        .then((insertedAnswers) => res.send(insertedAnswers))
        .catch(next);
    }
}