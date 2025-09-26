const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API BackEnd Funcionando');
});

const PORT = process.env.PORT || 300;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});