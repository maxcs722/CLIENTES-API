const db = require('../config/db');


// OBTENER TODOS LOS CLIENTES
exports.getClientes = async (req, res) => {

    try {

        const [rows] = await db.query(
            'SELECT * FROM cliente'
        );

        console.log(rows);

        res.json(rows);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error del servidor',
            error: error.message
        });

    }

};


// OBTENER CLIENTE POR ID
exports.getClienteById = async (req, res) => {

    try {

        const { id } = req.params;

        const [rows] = await db.query(
            'SELECT * FROM cliente WHERE id_cliente = ?',
            [id]
        );

        if (rows.length === 0) {

            return res.status(404).json({
                mensaje: 'Cliente no encontrado'
            });

        }

        res.json(rows[0]);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error del servidor',
            error: error.message
        });

    }

};


// CREAR CLIENTE
exports.createCliente = async (req, res) => {

    try {

        const { nombre, email, telefono } = req.body;

        const [existe] = await db.query(
            'SELECT * FROM cliente WHERE email = ?',
            [email]
        );

        // ERROR 409
        if (existe.length > 0) {

            return res.status(409).json({
                mensaje: 'El correo ya está registrado'
            });

        }

        const [result] = await db.query(
            'INSERT INTO cliente (nombre, email, telefono) VALUES (?, ?, ?)',
            [nombre, email, telefono]
        );

        res.status(201).json({
            mensaje: 'Cliente creado exitosamente',
            clienteId: result.insertId
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error del servidor',
            error: error.message
        });

    }

};


// ACTUALIZAR CLIENTE
exports.updateCliente = async (req, res) => {

    try {

        const { id } = req.params;
        const { nombre, email, telefono } = req.body;

        const [cliente] = await db.query(
            'SELECT * FROM cliente WHERE id_cliente = ?',
            [id]
        );

        if (cliente.length === 0) {

            return res.status(404).json({
                mensaje: 'Cliente no encontrado'
            });

        }

        await db.query(
            'UPDATE cliente SET nombre = ?, email = ?, telefono = ? WHERE id_cliente = ?',
            [nombre, email, telefono, id]
        );

        res.json({
            mensaje: 'Cliente actualizado exitosamente'
        });

    } catch (error) {

        if (error.code === 'ER_DUP_ENTRY') {

            return res.status(409).json({
                mensaje: 'El correo ya existe'
            });

        }

        res.status(500).json({
            mensaje: 'Error del servidor',
            error: error.message
        });

    }

};


// ELIMINAR CLIENTE
exports.deleteCliente = async (req, res) => {

    try {

        const { id } = req.params;

        const [cliente] = await db.query(
            'SELECT * FROM cliente WHERE id_cliente = ?',
            [id]
        );

        if (cliente.length === 0) {

            return res.status(404).json({
                mensaje: 'Cliente no encontrado'
            });

        }

        await db.query(
            'DELETE FROM cliente WHERE id_cliente = ?',
            [id]
        );

        res.json({
            mensaje: 'Cliente eliminado exitosamente'
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error del servidor',
            error: error.message
        });

    }

};