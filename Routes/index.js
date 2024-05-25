const express = require('express');
const router = express.Router();

// GET HOME PAGE
router.get('/', (req, res) => {
    res.send('Hello World!');
})

module.exports = router;