# CLIENTES-API

API REST desarrollada con Node.js, Express y MariaDB/MySQL para la gestión de clientes mediante operaciones CRUD.

---

# Descripción

Este proyecto corresponde al desarrollo de una API REST funcional conectada a una base de datos relacional MariaDB/MySQL.

La API permite realizar operaciones CRUD sobre la entidad `cliente`, incluyendo validación de correos duplicados utilizando manejo de errores `409 Conflict`.

---

# Tecnologías utilizadas

* Node.js
* Express
* MariaDB / MySQL
* mysql2
* dotenv
* cors
* morgan
* nodemon

---

# Instalación

## 1. Clonar repositorio

```bash
git clone https://github.com/maxcs722/CLIENTES-API.git
```

---

## 2. Entrar al proyecto

```bash
cd CLIENTES-API
```

---

## 3. Instalar dependencias

```bash
npm install
```

---

# Configuración de variables de entorno

Crear archivo `.env` en la raíz del proyecto:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=semana9
DB_NAME=clientes_db
DB_PORT=3306

PORT=3000
```

---

# Base de datos

Ejecutar el siguiente script SQL en MariaDB/MySQL:

```sql
CREATE DATABASE IF NOT EXISTS clientes_db;

USE clientes_db;

CREATE TABLE cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

# Ejecutar proyecto

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm start
```

---

# Endpoints disponibles

## Obtener todos los clientes

```bash
curl http://localhost:3000/api/clientes
```

---

## Obtener cliente por ID

```bash
curl http://localhost:3000/api/clientes/1
```

---

## Crear cliente

```bash
curl -X POST http://localhost:3000/api/clientes \
-H "Content-Type: application/json" \
-d '{"nombre":"Victor Figueroa","email":"victor@mail.com","telefono":"987654321"}'
```

---

## Actualizar cliente

```bash
curl -X PUT http://localhost:3000/api/clientes/1 \
-H "Content-Type: application/json" \
-d '{"nombre":"Victor Actualizado","email":"victor@mail.com","telefono":"999999999"}'
```

---

## Eliminar cliente

```bash
curl -X DELETE http://localhost:3000/api/clientes/1
```

---

# Manejo de errores

La API implementa:

* Validación de correos duplicados
* Manejo de errores `404`
* Manejo de errores `409 Conflict`
* Manejo de errores `500 Internal Server Error`

---

# Pruebas realizadas

Las pruebas fueron realizadas utilizando:

* cURL
* Navegador web
* terminal

---

# Problema técnico detectado

Durante el desarrollo se presentó un problema con MariaDB relacionado con corrupción de tablas internas del sistema (`mysql.db`, `mysql.plugin`, entre otras).

## Solución aplicada

* Reinicialización de MariaDB
* Configuración de permisos
* Recreación de tablas del sistema
* Reconfiguración del usuario root

Posteriormente, la API logró conectarse correctamente a la base de datos.

---

# Autor

Víctor Figueroa
