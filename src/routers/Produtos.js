const express = require('express')
const router = express.Router()
const ProdutosController = require('../controllers/produtos-controller')
const verify = require('../middleware/verify')

router.get('/', ProdutosController.get)

router.get('/:id_produto', ProdutosController.getId)

router.post('/', ProdutosController.post)

router.patch('/:id_produto', ProdutosController.patch)

router.delete('/:id_produto', verify.delete, ProdutosController.delete)

module.exports = router