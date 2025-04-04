const express = require('express');
const app = express();

const PORT = 3000;

// Endpoint de salud para el health check
app.get('/health', (req, res) => {
    res.status(200).send({ status: 'OK' });
});

// Endpoint de prueba
app.get('/', (req, res) => {
    res.send('API Composition Instance is running!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
