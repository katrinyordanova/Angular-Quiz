const router = require('../routes/')

module.exports = (app) => {
    app.use('/api/user', router.user);
    app.use('/api/quiz', router.quiz);
    app.use('/api/questions', router.questions);
    app.get('*', (req, res) => { res.send('<h1>Something went wrong</h1>');});
}