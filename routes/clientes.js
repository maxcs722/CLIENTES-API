const express = require('express');

const router = express.Router();

const clienteController = require('../controllers/clienteController');


// OBTENER TODOS
router.get('/', clienteController.getClientes);


// OBTENER POR ID
router.get('/:id', clienteController.getClienteById);


// CREAR
router.post('/', clienteController.createCliente);


// ACTUALIZAR
router.put('/:id', clienteController.updateCliente);


// ELIMINAR
router.delete('/:id', clienteController.deleteCliente);


module.exports = router;