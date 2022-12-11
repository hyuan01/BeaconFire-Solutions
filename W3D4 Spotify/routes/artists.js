const express = require('express');
const router = express.Router();
const artists = require('../controllers/artists');


// artists page
router.get('/', artists.indexPage);

// TEMPORARY ARTIST CREATION
router.post('/', artists.createArtist);

// follow an artist
router.put('/:artist_id', artists.followArtist);

module.exports = router;