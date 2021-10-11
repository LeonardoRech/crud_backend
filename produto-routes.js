const { application } = require('express');
const express = require('express');
const {addProduto, getAllProdutos, getProduto, updateProduto, deleteProduto} = require('../controllers/produtoController');

const router = express.Router();

router.post('/produto', addProduto);
router.get('/produtos', getAllProdutos);
router.get('/produto/:id', getProduto);
router.put('/produto/:id', updateProduto);
router.delete('/produto/:id', deleteProduto);

module.exports = {
    routes: router
}