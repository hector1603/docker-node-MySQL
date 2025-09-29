require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());

console.log("Clave secreta: ", jwtSecret);
console.log("Puerto: ", port);

app.get('/', (req, res) => {
    res.send('API BackEnd Funcionando');
});

const PORT = process.env.PORT || 300;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});