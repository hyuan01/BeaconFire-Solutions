const User = require('../models/user');

// show the info page for current user
module.exports.infoPage = async (req, res) => {
    const user = await User.find({});
    res.render('user/info', { user });
};

// show the user's liked songs
module.exports.likedSongs = async (req, res) => {
    const user = await User.find({});
    res.render('user/liked', { info });
};


// TEMPORARY USER CREATION
module.exports.createUser = async (req, res) => {
    // add timestamp
    console.log(req.body);
    const user = new User(req.body);
    await user.save();
    console.log(user);
    res.send("success! :D");
};


// update user information
module.exports.updateInfo = async (req, res) => {
    const user = await User.findById(req.body.id);
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    await user.save();
    console.log('hooray!', user);
    res.redirect('/user/info');
};