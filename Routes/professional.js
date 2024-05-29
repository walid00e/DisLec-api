const express = require('express');
const ProfessionalController = require('../Controllers/ProfessionalController');

const router = express.Router();

router.get('/:id', ProfessionalController.professionalDetails);
router.get('/user/:id', ProfessionalController.professionalByUserId);

module.exports = router;