require('dotenv').config();
const tareaRoutes = require("./routes/tareaRoutes");
const authRoutes = require('./routes/authRoutes')

const path = require('path');
const { apiReference } = require('@scalar/express-api-reference')

const express = require('express');
const app = express();
const port = process.env.PORT;
const jwtSecret = process.env.JWT_SECRET;

const cors = require('cors');

const corsOption = {
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true
}

app.use(express.json());
app.use(cors(corsOption));

console.log("Clave secreta: ", jwtSecret);
console.log("Puerto: ", port);

app.get('/', (req, res) => {
    res.send('API BackEnd Funcionando');
});

app.use('/api', tareaRoutes);
app.use('/api', authRoutes);

app.use('/docs', apiReference({
    theme: "purple",
    layout: "modern", 
    spec: {
        url: '/api/openapi.yaml'
    },
    configuration: {
        showSidebar: true,
        hideDownloadButton: false,
        hideTryItPanel: false,
        authentication: {
            preferredSecuritySchema: "bearerAuth",
            apiKey: {
                token: "token"
            }
        }
    }
}));

app.get('/api/openapi.yaml', (req, res) => {
    res.setHeader('Content-Type', 'application/x-yaml');
    res.sendFile(path.join(__dirname, '../docs/openapi.yaml'));
})

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
    console.log(`Documentación disponible en: http://localhost:${port}/docs`);
});