const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/info', controllers.quiz.get.many);

module.exports = router;