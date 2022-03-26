const db = require('../db')

exports.patch = async (req, res, next) => {

    const Produto = {
        id : req.body.id_produto,
        nome : req.body.nome,
        categoria : req.body.categoria,
        quantidade : req.body.quantidade,
        preco : req.body.preco,
        desconto : req.body.desconto
    }

    try {
        
        const result = await db.execute(        
            'UPDATE produtos SET nome = ?, categoria = ?, quantidade = ?, preco = ?, desconto = ? WHERE id = ?',
        [Produto.nome, Produto.categoria, Produto.quantidade, Produto.preco, Produto.desconto, Produto.id])

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

        return res.status(202).send( response )
    } catch (error) {
        return res.status(500).send({ error : error })    
    }
}

exports.delete = async (req, res, next) => {

    const id = req.body.id_produto

    try {
        
        const result = await db.execute('DELETE FROM produtos WHERE id = ?', [id]) 

        const response = {
            mensagem : 'Dados removidos com sucesso',
            request : {
                tipo : 'DELETE',
                descricao : 'Remove um produto especifico da tabela',
                url : 'http://localhost:3008/produtos'
            }
        }

        return res.status(202).send( response )
    } catch (error) {
     return res.status(500).send({ error : error })   
    }
}