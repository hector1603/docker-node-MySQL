const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/registrar', authController.registerUser);
router.post('/login', authController.loginUser);

module.exports = router;