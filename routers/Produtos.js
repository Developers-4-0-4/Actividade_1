const express = require('express')
const router = express.Router()
const ProdutosController = require('../controllers/produtos-controller')

router.patch('/', ProdutosController.patch)

router.delete('/', ProdutosController.delete)

module.exports = router