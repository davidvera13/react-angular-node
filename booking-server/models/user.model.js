const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // _id: will be provided automatically
    username: {
        type: String,
        required: true,
        maxlength: [32, 'Invalid length. Max is 32 chars'],
        minlength: [4, 'Invalid length, Min is 4 chars']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/],
        maxlength: [32, 'Invalid length. Max is 32 chars'],
        minlength: [4, 'Invalid length, Min is 4 chars']
    },
    password: {
        type: String,
        required: true,
        maxlength: [32, 'Invalid length. Max is 32 chars'],
        minlength: [4, 'Invalid length, Min is 4 chars']
    }
});

// this method will be callee before 'save' function
userSchema.pre('save', function(next) {
    // retrieve the user we try to persist
    const user = this;
    // using bcrypt with salt
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash;
            next();
        })
    })

});

// using static call 
userSchema.statics.sendError = function(res, config) {
    const { status, detail } = config;
    return res
        .status(status)
        .send({errors: [{title: 'User Error!', detail}]})
}

module.exports = mongoose.model('User', userSchema)
