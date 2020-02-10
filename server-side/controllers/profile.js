const models = require('../models');

module.exports = {
    getUserProfile: (req, res, next) => {
        const id = req.params.id;

        models.profile.findOne(id).populate('user')
        .then((profile) => res.send(profile))
        .catch(next);
    }
}