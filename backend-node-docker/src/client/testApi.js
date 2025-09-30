const axios = require('axios');

async function testGerTareas() {
    try {
        const response = await axios.get('http://localhost:3000/api/tareas');
        console.log("Respuesta: ", response.data);
    } catch(error) {
        console.log("Error al obtener las tareas: ", error)
    }
}

testGerTareas();