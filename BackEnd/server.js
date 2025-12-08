const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Importar rutas
const inventarioRoutes = require('./routes/inventario.routes');

// Inicializar app
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Permitir peticiones desde Angular
app.use(bodyParser.json()); // Parsear JSON
app.use(bodyParser.urlencoded({ extended: true })); // Parsear URL-encoded

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({
        message: 'API REST - Sistema de Préstamos UTNG',
        version: '1.0.0',
        endpoints: {
            inventario: '/api/materiales'
        }
    });
});

// Rutas API
app.use('/api', inventarioRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Ruta no encontrada'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log('═══════════════════════════════════════');
    console.log(` Servidor corriendo en puerto ${PORT}`);
    console.log(` URL: http://localhost:${PORT}`);
    console.log(` API: http://localhost:${PORT}/api/materiales`);
    console.log('═══════════════════════════════════════');
});

module.exports = app;
