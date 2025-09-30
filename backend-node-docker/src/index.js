require('dotenv').config();
const tareaRoutes = require("./routes/tareaRoutes");
const authRoutes = require('./routes/authRoutes')

const express = require('express');
const app = express();
const port = process.env.PORT;
const jwtSecret = process.env.JWT_SECRET;

const cors = require('cors');

const corsOption = {
    origin: process.env.CORS_ORIGIN || "http://localhost:3000"
}

app.use(express.json());
app.use(cors(corsOption));

console.log("Clave secreta: ", jwtSecret);
console.log("Puerto: ", port);

app.get('/', (req, res) => {
    res.send('API BackEnd Funcionando');
});

app.use('/api', tareaRoutes);
app.use('/api', authRoutes)

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});