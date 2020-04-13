const user = require('./user');
const tokenBlacklist = require('./tokenBlacklist');
const quiz = require('./quiz');
const result = require('./result');
const profile = require('./profile');
const questions = require('./questions');
const answer = require('./answer');
const score = require('./score');

module.exports = { 
    user,
    tokenBlacklist,
    quiz,
    result,
    profile,
    questions,
    answer,
    score
};