const controllers = require('../controllers/');
const router = require('express').Router();

router.post('', controllers.answer.post);

module.exports = router;