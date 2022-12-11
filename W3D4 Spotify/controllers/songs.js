const Song = require('../models/song');
const User = require('../models/user');

// show the info page for songs
module.exports.indexPage = async (req, res) => {
    const songs = await Song.find({});
    res.render('songs/index', { songs });
};

// category
module.exports.byCategory = async (req, res) => {
    try {
        const songs = await Song.find({category: req.params.category});
        res.send(`list of songs that fit your query: \n ${songs}`);
    }
    catch (err) {
        res.send(error);
    }
};

// search by artist name or title
module.exports.byQuery = async (req, res) => {
    console.log(req.params.search);
    try {
        const songs = await Song.find({"$or": [{artist: req.params.search}, {title: req.params.search} ] });
        res.send(`list of songs that fit your query: \n ${songs}`);
    }
    catch (err) {
        res.send(error);
    }
};

// TEMPORARY SONG CREATION
module.exports.createSong = async (req, res) => {
    // add timestamp
    console.log(req.body);
    const song = new Song(req.body);
    await song.save();
    console.log(song);
    res.send("success! :D");
};

// like a song [TEMP]
module.exports.likeSong = async (req, res) => {
    const song = await Song.findById(req.params.song_id);
    const user = await User.findById(req.body.id);
    user.liked.push(song);
    await user.save();
    res.send(`${user}`);

};