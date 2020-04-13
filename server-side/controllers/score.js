const models = require('../models');

module.exports = {
    post: { 
        submitScore: (req, res, next) => {
            console.log('here');
            const { userId, username, score, timeSpent } = req.body;
            models.score.create({ userId, username, score, timeSpent })
            .then((submittedScore) => res.send(submittedScore))
            .catch(next);
        }
    }
}