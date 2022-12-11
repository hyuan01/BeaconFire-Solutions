const Artist = require('../models/artist');
const User = require('../models/user');

// show the info page for artists
module.exports.indexPage = async (req, res) => {
    const artists = await Artist.find({});
    res.render('artists/index', { artists });
};

// TEMPORARY USER CREATION
module.exports.createArtist = async (req, res) => {
    console.log(req.body);
    const artist = new Artist(req.body);
    await artist.save();
    console.log(artist);
    res.send("success! :D");
};

// follow an artist [TEMP]
module.exports.followArtist = async (req, res) => {
    const artist = await Artist.findById(req.params.artist_id);
    const user = await User.findById(req.body.id);
    user.following.push(artist);
    await user.save();
    res.send(`${user}`);

};