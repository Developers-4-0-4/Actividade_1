const express = require('express')
const router = express.Router()
const ProdutosController = require('../controllers/produtos-controller')
const verify = require('../middleware/verify')

router.patch('/', ProdutosController.patch)

router.delete('/', verify.delete, ProdutosController.delete)

module.exports = router