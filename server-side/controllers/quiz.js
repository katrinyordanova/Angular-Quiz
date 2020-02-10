const models = require('../models');

module.exports = {
    get: {
        many: (req, res, next) => {
                models.post.find().populate('author')
                .then((posts) => res.send(posts)
            ).catch(next);
        },
        one: (req, res, next) => {
            const id = req.params.id;
        
            models.post.findOne(id)
            .then((posts) => res.send(posts))
            .catch(next);
        }
    }
}