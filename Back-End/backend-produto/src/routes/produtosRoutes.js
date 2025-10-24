const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.post('/', produtosController.createProdutos);
router.get('/', produtosController.getProdutos);
router.put('/:id', produtosController.updateProdutos);
router.delete('/:id', produtosController.deleteProdutos);

module.exports = router;