const express = require('express');
const router = express.Router();
const songs = require('../controllers/songs');


// songs page
router.get('/', songs.indexPage);

router.get('/:category', songs.byCategory);

router.get('/search/:search', songs.byQuery);

// TEMPORARY SONG CREATION
router.post('/', songs.createSong);

// like a song
router.put('/:song_id', songs.likeSong);

module.exports = router;