const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/users', controllers.user.get.allUsers);
router.post('/register', controllers.user.post.register);
router.post('/login', controllers.user.post.login);
router.post('/logout', controllers.user.post.logout);

module.exports = router;