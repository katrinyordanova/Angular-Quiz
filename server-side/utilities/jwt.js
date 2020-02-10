const jwt = require('jsonwebtoken');
const secret = 'shhhhh';

function createToken(data) {
    return jwt.sign(data, secret);
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (error, data) => {
            if(error) { reject(error); return;}
            resolve(data);
        });
    });
}

module.exports = {
    createToken,
    verifyToken
}