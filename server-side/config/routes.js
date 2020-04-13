const router = require('../routes/')

module.exports = (app) => {
    app.use('/api/user', router.user);
    app.use('/api/quiz', router.quiz);
    app.use('/api/questions', router.questions);
    app.use('/api/answers', router.answer);
    app.use('/api/score', router.score);
    app.get('*', (req, res) => { res.send('<h1>Something went wrong</h1>');});
}