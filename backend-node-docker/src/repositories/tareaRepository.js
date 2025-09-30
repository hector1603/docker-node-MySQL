const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

async function getTareas() {
    return await prisma.tarea.findMany();
    //where: { usuarioId: usuarioId }
}

async function deleteTarea(id, usuarioId) {
    const tareaId = parseInt(id);
    if(isNaN(tareaId)) {
        throw new Error('ID de tarea invalido');
    }
    return await prisma.tarea.delete({ where: {id: tareaId} });
}

async function crearTarea(data, usuarioId) {
    return await prisma.tarea.create({ data: {...data, usuarioId} })
}

module.exports = {
    getTareas,
    deleteTarea,
    crearTarea
}