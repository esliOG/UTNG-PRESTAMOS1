const db = require('../config/database');

class Inventario {
    // Obtener todos los materiales
    static async getAll() {
        try {
            const [rows] = await db.query('SELECT * FROM inventario ORDER BY id ASC');
            return rows;
        } catch (error) {
            throw error;
        }
    }

    // Obtener material por ID
    static async getById(id) {
        try {
            const [rows] = await db.query('SELECT * FROM inventario WHERE id = ?', [id]);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    // Crear nuevo material
    static async create(materialData) {
        try {
            const { nombre, clasificacion, cantidad } = materialData;
            const [result] = await db.query(
                'INSERT INTO inventario (nombre, clasificacion, cantidad) VALUES (?, ?, ?)',
                [nombre, clasificacion, cantidad]
            );
            return result.insertId;
        } catch (error) {
            throw error;
        }
    }

    // Actualizar material
    static async update(id, materialData) {
        try {
            const { nombre, clasificacion, cantidad } = materialData;
            const [result] = await db.query(
                'UPDATE inventario SET nombre = ?, clasificacion = ?, cantidad = ? WHERE id = ?',
                [nombre, clasificacion, cantidad, id]
            );
            return result.affectedRows;
        } catch (error) {
            throw error;
        }
    }

    // Eliminar material
    static async delete(id) {
        try {
            const [result] = await db.query('DELETE FROM inventario WHERE id = ?', [id]);
            return result.affectedRows;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Inventario;
