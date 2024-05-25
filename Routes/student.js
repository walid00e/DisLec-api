const express = require('express');
const {studentDetails} = require('Controllers/StudentController');

const router = express.Router();

router.get('/:id', studentDetails);

module.exports = router;