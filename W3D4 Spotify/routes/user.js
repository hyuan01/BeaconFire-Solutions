const express = require('express');
const router = express.Router();
const user = require('../controllers/user');


// user info page
router.get('/info', user.infoPage);

// user liked songs
router.get('/songs', user.likedSongs);



// TEMPORARY USER CREATION
router.post('/info', user.createUser);

// update user info
router.put('/info', user.updateInfo);

module.exports = router;