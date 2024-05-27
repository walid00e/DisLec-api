const express = require('express');
const ImageController = require('../Controllers/ImageController');

const router = express.Router();

router.get('/:filename', ImageController.getImage);
router.get('/profile/:filename', ImageController.getProfileImage);
router.get('/utils/:filename', ImageController.getUtilsImage);

module.exports = router;