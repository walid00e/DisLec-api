const express = require('express');
const EssayController = require('../Controllers/EssayController');

const router = express.Router();

router.get('/:id', EssayController.getEssay);

module.exports = router;