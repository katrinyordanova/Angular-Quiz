const models = require('../models');
const config = require('../config/config');
const utilities = require('../utilities');

module.exports = {
    get: {
        many: (req, res, next) => {
            models.user.find()   
            .then((user) => (res.send(user)))
            .catch(next); 
        },
        one: (req, res, next) => {
            const user = req.params.id;
            models.user.findById(user)
            .then((userData) => res.send(userData))
            .catch(next);
        }
    },
	post: {
        register: (req, res, next) => {
            const { username, password, score, timeSpent } = req.body;
            models.user.findOne({ username }).then((user) => {
                if(user === null) {
                    models.user.create({ username, password, score, timeSpent})
                        .then((createdUser) => res.send(createdUser))
                        .catch(next);
                }else if(user.username === username) {
                    res.status(401).send('User already exists');
                    return;
                }
            }).catch(next);
        },
        login: (req, res, next) => {
            const { username, password } = req.body;
            models.user.findOne({ username })
                .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
                .then(([ user, match ]) => {
                if(!match) {
                    res.status(401).send('Invalid username or password');
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