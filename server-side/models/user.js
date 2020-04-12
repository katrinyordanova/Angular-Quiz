const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    score: {
        type: Number
    },
    timeSpent: {
        type: Number
    }
});

userSchema.methods = {
    matchPassword: function(password) {
        return bcryptjs.compare(password, this.password);
    }
};

userSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        bcryptjs.genSalt(saltRounds, (error, salt) => {
            bcryptjs.hash(this.password, salt, (error, hash) => {
                this.password = hash;
                next();                
            });
        });
        return;
    } 
    next();
});

module.exports = mongoose.model('User', userSchema);