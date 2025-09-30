const express = require('express');
const router = express.Router();
const { verificarToken } = require('../services/authServices');
const { autorizarRoles } = require('../middleware/rolMiddleware');

const tareaController = require("../controllers/tareaController");

router.get('/tareas', verificarToken, tareaController.getTareas);
router.delete('/tareas/:id', verificarToken, autorizarRoles('admin'), tareaController.deleteTarea)
router.post('/tareas', verificarToken, tareaController.crearTarea);

module.exports = router;