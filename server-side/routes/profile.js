const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utilities');

router.get('/profile', auth(), controllers.profile.getUserProfile);

module.exports = router;