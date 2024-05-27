const express = require('express');
const studentController = require('../Controllers/StudentController');

const router = express.Router();

router.get("/:id", studentController.studentDetails);
router.get("/user/:id", studentController.studentsByUserId);

module.exports = router;