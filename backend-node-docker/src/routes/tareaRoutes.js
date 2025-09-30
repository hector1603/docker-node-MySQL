const express = require('express');
const router = express.Router();

const tareaController = require("../controllers/tareaController");

router.get('/tareas', tareaController.getTareas);

module.exports = router;