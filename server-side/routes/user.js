const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/users', controllers.user.get.many);
router.get('/:id', controllers.user.get.one);
router.post('/register', controllers.user.post.register);
router.post('/login', controllers.user.post.login);
router.post('/logout', controllers.user.post.logout);
router.post('/update', controllers.user.put.updateData);

module.exports = router;