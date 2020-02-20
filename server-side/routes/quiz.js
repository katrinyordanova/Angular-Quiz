const controllers = require('../controllers/');
const router = require('express').Router();

router.get('', controllers.quiz.get.many);

module.exports = router;