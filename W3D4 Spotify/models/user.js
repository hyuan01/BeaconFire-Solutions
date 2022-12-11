const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    liked: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    }]
})

module.exports = mongoose.model('User', UserSchema);