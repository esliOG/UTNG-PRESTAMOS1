const Inventario = require('../models/inventario.model');

// Obtener todos los materiales
exports.getAllMateriales = async (req, res) => {
    try {
        const materiales = await Inventario.getAll();
        res.status(200).json({
            success: true,
            data: materiales
        });
    } catch (error) {
        console.error('Error al obtener materiales:', error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener materiales',
            error: error.message
        });
    }
};

// Obtener material por ID
exports.getMaterialById = async (req, res) => {
    try {
        const { id } = req.params;
        const material = await Inventario.getById(id);
        
        if (!material) {
            return res.status(404).json({
                success: false,
                message: 'Material no encontrado'
            });
        }
        
        res.status(200).json({
            success: true,
            data: material
        });
    } catch (error) {
        console.error('Error al obtener material:', error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener material',
            error: error.message
        });
    }
};

// Crear nuevo material (ALTA)
exports.createMaterial = async (req, res) => {
    try {
        const { nombre, clasificacion, cantidad } = req.body;
        
        // Validación básica
        if (!nombre || !clasificacion || cantidad === undefined) {
            return res.status(400).json({
                success: false,
                message: 'Faltan campos requeridos: nombre, clasificacion, cantidad'
            });
        }
        
        const insertId = await Inventario.create({ nombre, clasificacion, cantidad });
        
        res.status(201).json({
            success: true,
            message: 'Material creado exitosamente',
            data: { id: insertId, nombre, clasificacion, cantidad }
        });
    } catch (error) {
        console.error('Error al crear material:', error);
        res.status(500).json({
            success: false,
            message: 'Error al crear material',
            error: error.message
        });
    }
};

// Actualizar material (MODIFICAR)
exports.updateMaterial = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, clasificacion, cantidad } = req.body;
        
        // Validación básica
        if (!nombre || !clasificacion || cantidad === undefined) {
            return res.status(400).json({
                success: false,
                message: 'Faltan campos requeridos: nombre, clasificacion, cantidad'
            });
        }
        
        const affectedRows = await Inventario.update(id, { nombre, clasificacion, cantidad });
        
        if (affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Material no encontrado'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Material actualizado exitosamente',
            data: { id, nombre, clasificacion, cantidad }
        });
    } catch (error) {
        console.error('Error al actualizar material:', error);
        res.status(500).json({
            success: false,
            message: 'Error al actualizar material',
            error: error.message
        });
    }
};

// Eliminar material (BAJA)
exports.deleteMaterial = async (req, res) => {
    try {
        const { id } = req.params;
        
        const affectedRows = await Inventario.delete(id);
        
        if (affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Material no encontrado'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Material eliminado exitosamente'
        });
    } catch (error) {
        console.error('Error al eliminar material:', error);
        res.status(500).json({
            success: false,
            message: 'Error al eliminar material',
            error: error.message
        });
    }
};
