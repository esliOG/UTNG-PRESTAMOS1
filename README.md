# ��� Sistema de Préstamos UTNG

Sistema completo de gestión de inventario y préstamos de material educativo para la Universidad Tecnológica del Norte de Guanajuato.

## ��� Descripción

Aplicación web full-stack que permite:
- ✅ Gestión de inventario de materiales (CRUD completo)
- ✅ Control de préstamos y devoluciones
- ✅ Reportes y administración
- ✅ Sistema de autenticación

## ���️ Tecnologías Utilizadas

### Frontend
- **Angular 17** - Framework principal
- **TypeScript** - Lenguaje de programación
- **SCSS** - Estilos
- **RxJS** - Programación reactiva

### Backend
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MySQL** - Base de datos
- **dotenv** - Variables de entorno

## ��� Estructura del Proyecto
```
UTNG-PRESTAMOS1/
├── BackEnd/                  # API REST
│   ├── config/              # Configuración de BD
│   ├── controllers/         # Lógica de negocio
│   ├── models/              # Modelos de datos
│   ├── routes/              # Rutas API
│   ├── .env                 # Variables de entorno
│   ├── server.js            # Servidor principal
│   └── database.sql         # Script SQL
│
├── src/                     # Frontend Angular
│   ├── app/
│   │   ├── components/     # Componentes
│   │   ├── services/       # Servicios HTTP
│   │   └── environments/   # Configuración
│   └── ...
│
└── README.md
```

## ��� Instalación y Configuración

### Requisitos Previos
- Node.js (v18 o superior)
- MySQL (v8 o superior)
- Angular CLI (v17 o superior)
- Git

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/UTNG-PRESTAMOS1.git
cd UTNG-PRESTAMOS1
```

### 2️⃣ Configurar el Backend
```bash
cd BackEnd

# Instalar dependencias
npm install

# Configurar base de datos
# 1. Abre phpMyAdmin
# 2. Importa el archivo database.sql
# 3. Verifica que se creó la BD 'prestamos_utng'

# Configurar variables de entorno
# Edita el archivo .env con tus credenciales de MySQL

# Iniciar servidor backend
npm start
```

El servidor estará corriendo en: `http://localhost:3000`

### 3️⃣ Configurar el Frontend
```bash
# Desde la raíz del proyecto
npm install

# Iniciar servidor de desarrollo
ng serve
```

La aplicación estará disponible en: `http://localhost:4200`

## ��� API Endpoints

Base URL: `http://localhost:3000/api`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/materiales` | Obtener todos los materiales |
| GET | `/materiales/:id` | Obtener material por ID |
| POST | `/materiales` | Crear nuevo material |
| PUT | `/materiales/:id` | Actualizar material |
| DELETE | `/materiales/:id` | Eliminar material |

### Ejemplo de petición POST:
```json
{
  "nombre": "Multímetro Digital",
  "clasificacion": "Electrónica",
  "cantidad": 10
}
```

## ���️ Base de Datos

### Tabla: inventario
```sql
CREATE TABLE inventario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    clasificacion VARCHAR(100) NOT NULL,
    cantidad INT NOT NULL DEFAULT 0,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## ��� Pruebas

### Backend
```bash
cd BackEnd
npm start
# Visita: http://localhost:3000/api/materiales
```

### Frontend
```bash
ng serve
# Visita: http://localhost:4200
```

## ��� Build para Producción

### Backend
```bash
cd BackEnd
# El backend ya está listo para producción
# Solo configura las variables de entorno en el servidor
```

### Frontend
```bash
ng build --configuration production
# Los archivos se generarán en dist/utng-prestamos/browser/
```

## ��� Seguridad

- ✅ Variables de entorno protegidas (.env)
- ✅ CORS configurado
- ✅ Validación de datos en backend
- ✅ Sanitización de inputs en frontend

## ��� Autores

- **Equipo UTNG** - Desarrollo inicial
- **Tu Nombre** - Reestructuración y mejoras

## ��� Licencia

Este proyecto es de uso educativo para la UTNG.

## ��� Soporte

Si tienes problemas:

1. Verifica que MySQL esté corriendo
2. Verifica que el backend esté en el puerto 3000
3. Revisa la consola del navegador para errores
4. Verifica los logs del servidor backend

## ��� Próximas Mejoras

- [ ] Sistema de autenticación JWT
- [ ] Módulo de reportes avanzados
- [ ] Dashboard con estadísticas
- [ ] Sistema de préstamos completo
- [ ] Notificaciones en tiempo real
- [ ] Exportar a Excel/PDF

---

**Desarrollado con ❤️ para la UTNG**
