const express = require('express')
const router = express.Router()
const db = require('../db').pool

router.patch('/:id_produto', (req, res, next) => {

    const Produto = {
        id : req.params.id_produto,
        nome : req.body.nome,
        categoria : req.body.categoria,
        quantidade : req.body.quantidade,
        preco : req.body.preco,
        desconto : req.body.desconto
    }
    
    db.query(
        'UPDATE produtos SET nome = ?, categoria = ?, quantidade = ?, preco = ?, desconto = ? WHERE id = ?',
        [Produto.nome, Produto.categoria, Produto.quantidade, Produto.preco, Produto.desconto, Produto.id],
    (error, result, field) => {

        if( error ) { return res.status(500).send({ error : error })}

        const response = {
            mensagem : 'Dados do produto alterados com sucesso',
            produtoAlterado : {
                id_produto : Produto.id,
                nome : Produto.nome,
                categoria : Produto.categoria,
                quantidade : Produto.quantidade,
                preco : Produto.preco,
                desconto : Produto.desconto,
                request : {
                    tipo : 'PATCH',
                    descricao : 'Alteração dos dados do produto especifico',
                    url : 'http://localhost:3008/produtos'
                }
            }
        }

        return res.status(201).send( response )
    } 
    )

})

router.delete('/:id_produto', (req, res, next) => {

    const id = req.params.id_produto

    db.query(
        'DELETE FROM produtos WHERE id = ?',
        [id],
        (error, result, field) => {

            if( error ) { return res.status(500).send({ error : error})}

            const response = {
                mensagem : 'Dados removidos com sucesso',
                request : {
                    tipo : 'DELETE',
                    descricao : 'Remove um produto especifico da tabela',
                    url : 'http://localhost:3008/produtos'
                }
            }

            return res.status(200).send( response )
        }
    )
})

module.exports = router