const express = require('express');
const router = express.Router();
const { verificarToken } = require('../services/authServices');

const tareaController = require("../controllers/tareaController");

router.get('/tareas', verificarToken, tareaController.getTareas);

module.exports = router;