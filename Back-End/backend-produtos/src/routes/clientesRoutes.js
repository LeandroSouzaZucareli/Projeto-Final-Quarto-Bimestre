const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Rota para criar um novo cliente
router.post('/', clientesController.createCliente);

// Rota para obter todos os clientes
router.get('/', clientesController.getClientes);

// Rota para atualizar um cliente existente pelo id
router.put('/:id', clientesController.updateCliente);

// Rota para deletar um cliente pelo id
router.delete('/:id', clientesController.deleteCliente);

module.exports = router;
