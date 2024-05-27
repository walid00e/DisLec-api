const express = require('express');
const RankController = require('../Controllers/RankController');

const router = express.Router();

router.get('/:id', RankController.rankDetails);

module.exports = router;