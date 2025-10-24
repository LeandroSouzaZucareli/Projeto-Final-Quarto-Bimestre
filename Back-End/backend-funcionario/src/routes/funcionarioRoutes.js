const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

// Rota para criar um novo cliente
router.post('/', funcionarioController.createFuncionario);

// Rota para obter todos os clientes
router.get('/', funcionarioController.getFuncionario);

// Rota para atualizar um cliente existente pelo id
router.put('/:id', funcionarioController.updateFuncionario);

// Rota para deletar um cliente pelo id
router.delete('/:id', funcionarioController.deleteFuncionario);

module.exports = router;
