-- ========================================
-- Base de Datos: Sistema de Préstamos UTNG
-- ========================================

-- Crear base de datos si no existe
CREATE DATABASE IF NOT EXISTS prestamos_utng CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Usar la base de datos
USE prestamos_utng;

-- ========================================
-- Tabla: inventario
-- ========================================

-- Eliminar tabla si existe (para testing)
DROP TABLE IF EXISTS inventario;

-- Crear tabla de inventario
CREATE TABLE inventario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    clasificacion VARCHAR(100) NOT NULL,
    cantidad INT NOT NULL DEFAULT 0,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ========================================
-- Datos de prueba
-- ========================================

INSERT INTO inventario (id, nombre, clasificacion, cantidad) VALUES
(101, 'Osciloscopio Digital', 'Electrónica', 5),
(205, 'Multímetro Básico', 'Electrónica', 20),
(312, 'Kit de Arduino Uno', 'Programación', 15),
(401, 'Protoboard 830 puntos', 'Electrónica', 30),
(502, 'Fuente de Poder Regulable', 'Electrónica', 8),
(603, 'Kit de Sensores', 'Programación', 12);

-- ========================================
-- Verificar datos insertados
-- ========================================

SELECT * FROM inventario;
