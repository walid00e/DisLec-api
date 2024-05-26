const express = require('express');
const studentController = require('../Controllers/StudentController');

const router = express.Router();

router.get("/:id", studentController.studentDetails);

module.exports = router;