const controllers = require('../controllers/');
const router = require('express').Router();

router.post('/submit', controllers.score.post.submitScore);

module.exports = router;