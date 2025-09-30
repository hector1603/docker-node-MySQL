const tareaRepository = require("../repositories/tareaRepository");

async function getTareas() {
    return await tareaRepository.getTareas();
}

async function deleteTarea(id, usuarioId) {
    return await tareaRepository.deleteTarea(id, usuarioId);
}

async function crearTarea(data, usuarioId) {
    return await tareaRepository.crearTarea(data, usuarioId);
}

module.exports = {
    getTareas,
    deleteTarea,
    crearTarea
}