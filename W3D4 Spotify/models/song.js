const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    // change this later
    artist: {
        type: String,
        required: true
    },
    language: {
        type: String
    },
    category: [{
        type: String
    }]
})

module.exports = mongoose.model('Song', SongSchema);