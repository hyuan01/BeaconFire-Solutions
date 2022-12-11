const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // change this later
    songs: [{
        type: String
    }]
})

module.exports = mongoose.model('Artist', ArtistSchema);