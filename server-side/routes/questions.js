const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/questions', controllers.questions.get.many);

module.exports = router;