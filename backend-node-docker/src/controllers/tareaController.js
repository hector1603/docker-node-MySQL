const tareaService = require("../services/tareaService");

async function getTareas(req, res) {
    try {
        const tareas = await tareaService.getTareas();
        res.status(200).json({message: 'Tareas obtenidas correctamente', data: tareas});
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function deleteTarea(req, res) {
    try {
        const tarea = await tareaService.deleteTarea(req.params.id, req.user.userId);
        res.status(200).json({message: 'Tarea eliminada correctamente', data: tarea});
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function crearTarea(req, res) {
    try {
        const tarea = await tareaService.crearTarea(req.body, req.user.userId);
        res.status(200).json({message: 'Tarea creada correctamente', data: tarea});
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getTareas,
    deleteTarea,
    crearTarea
}