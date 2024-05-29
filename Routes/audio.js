const express = require('express');
const AudioController = require('../Controllers/AudioController');

const router = express.Router();

router.post('/upload', AudioController.uploadAudio);
router.get('/:filename', AudioController.getAudio);

module.exports = router;