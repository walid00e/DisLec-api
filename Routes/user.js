const express = require('express');
const UserController = require('../Controllers/UserController');

const router = express.Router();

router.get('/:id', UserController.userDetails);

module.exports = router;