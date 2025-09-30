function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Definimos la función como async
async function demo() {
    console.log("Iniciando...");
    // Tarea lenta (Asincronia), el programa no se bloque acá y continua con las lineas que estan por fuera de la función
    await esperar(3000);
    console.log("Fin.")
}

demo();
// Se ejecuta esta linea que estaria en el hilo principal
console.log("Fin del programa.");

// Despues que la tarea lenta termina, devuelve la promesa de la función esperar() y termina el programa en este ejemplo básico.