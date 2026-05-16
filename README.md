# API REST Clientes

Proyecto desarrollado con Node.js, Express y MariaDB.

## Descripción

Esta API REST permite realizar operaciones CRUD sobre la entidad cliente.

## Tecnologías utilizadas

- Node.js
- Express
- MariaDB
- mysql2
- dotenv
- cors
- morgan

## Instalación

Clonar repositorio:

```bash
git clone https://github.com/maxcs722/CLIENTES-API

Entrar al proyecto:

cd clientes-api

Instalar dependencias:

npm install
Configuración

Crear archivo .env

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=semana9
DB_NAME=clientes_db
DB_PORT=3306

PORT=3000
Ejecutar proyecto
npm run dev
Endpoints
Obtener clientes
GET /api/clientes
Obtener cliente por ID
GET /api/clientes/:id
Crear cliente
POST /api/clientes
Actualizar cliente
PUT /api/clientes/:id
Eliminar cliente
DELETE /api/clientes/:id
Base de datos
CREATE DATABASE clientes_db;

USE clientes_db;

CREATE TABLE cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);