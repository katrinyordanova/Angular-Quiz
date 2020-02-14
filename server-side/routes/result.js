const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utilities');

// router.get('/all-posts', auth(), controllers.post.get.many);
// router.get('/:id', auth(), controllers.post.get.one);
// router.post('/create-post', auth(), controllers.post.post);

module.exports = router;