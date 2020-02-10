const router = require('../routes/')

module.exports = (app) => {
    app.use('/api/user', router.user);
    app.use('/api/post', router.post);
    app.get('*', (req, res) => { res.send('<h1>Something went wrong</h1>');});
}