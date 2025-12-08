const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventario.controller');

// Rutas CRUD para inventario
router.get('/materiales', inventarioController.getAllMateriales);           // GET all
router.get('/materiales/:id', inventarioController.getMaterialById);        // GET by ID
router.post('/materiales', inventarioController.createMaterial);            // CREATE (Alta)
router.put('/materiales/:id', inventarioController.updateMaterial);         // UPDATE (Modificar)
router.delete('/materiales/:id', inventarioController.deleteMaterial);      // DELETE (Baja)

module.exports = router;
