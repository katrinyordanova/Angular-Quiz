const models = require('../models');
const config = require('../config/config');
const utilities = require('../utilities');

module.exports = {
	post: {
        register: (req, res, next) => {
            const { name, password } = req.body;
            models.user.findOne({ name }).then((user) => {
                if(user === name) {
                    res.status(401).send('User already exists');
                    return;
                }
            });
            models.user.create({ name, password })
                .then((createdUser) => res.send(createdUser))
                .catch(next);
        },
        login: (req, res, next) => {
            const { name, password } = req.body;
            models.user.findOne({ name })
                .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
                .then(([ user, match ]) => {
                if(!match) {
                    res.status(401).send('Invalid name or password');
                    return;
                }
                const token = utilities.jwt.createToken({ id: user._id });
                res.cookie(config.authCookieName, token).send(user);
            })
            .catch(next);
        },
        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            models.tokenBlacklist.create({ token })
                .then(() => { 
                    res.clearCookie(config.authCookieName).send('Logged out!');
                })
            .catch(next);
        }
    }
}