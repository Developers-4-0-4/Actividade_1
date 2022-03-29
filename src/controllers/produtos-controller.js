const Produto = require('../model/Produto')

exports.get = async (req, res, next) => {

    try {
        
        const result = await Produto.findAll()

        const response = {
            quantidade_produtos : result.length,
            produtos : result.map(prod => {
                return {
                    id_produuto : prod.id,
                    nome : prod.nome,
                    preco : prod.preco,
                    categoria : prod.categoria,
                    desconto : prod.desconto,
                    quantidade : prod.quantidade,
                    request : {
                        tipo : 'GET',
                        descricao : 'Retorna os registros da tabela',
                        url : 'http://localhost:3008/produtos/' + prod.id
                    }
                }
            })

        }

        return res.status(200).send( response )
    } catch (error) {
        return res.status(500).send({ error : error })
    }
}

exports.getId = async (req, res, next) => {

    try {

        const result = await Produto.findByPk(req.params.id_produto)


        const response = {
            produto : {
                id_produto : result.id,
                nome : result.nome,
                preco : result.preco,
                categoria : result.categoria,
                desconto : result.desconto,
                quantidade : result.quantidade,
                request : {
                    tipo : 'GET',
                    descricao : 'Retorna os dados de um produto especifico',
                    url : 'http://localhost:3008/produtos'
                }
            }
        }
        console.log(result)
        return res.status(200).send( response )

    } catch (error) {
        console.log(error)
        return res.status(500).send({ error : error })
    }
}

exports.post = async (req, res, next) => {

    try {
        const result = await Produto.create({
            nome : req.body.nome,
            preco : req.body.preco,
            categoria : req.body.categoria,
            desconto : req.body.desconto,
            quantidade : req.body.quantidade
        })
    
        const response = {
            mensagem : 'Produto inserido com sucesso',
            produtoCriado : {
                id_produto : result.id,
                nome : req.body.nome,
                preco : req.body.preco,
                categoria : req.body.categoria,
                desconto : req.body.desconto,
                quantidade : req.body.quantidade,
                request : {
                    tipo : 'POST',
                    descricao : 'Insere um produto na tabela',
                    url : 'http://localhost:3008/produtos'
                }
            }
        }

        return res.status(201).send( response )
    } catch (error) {
        return res.status(500).send({ error : error })
    }
}

exports.patch = async (req, res, next) => {

    const Prod = {
        id : req.params.id_produto,
        nome : req.body.nome,
        preco : req.body.preco,
        categoria : req.body.categoria,
        desconto : req.body.desconto,
        quantidade : req.body.quantidade
    }

    try {
        
        const produto = await Produto.findByPk(Prod.id)
        produto.nome = Prod.nome
        produto.preco = Prod.preco
        produto.categoria = Prod.categoria
        produto.desconto = Prod.desconto
        produto.quantidade = Prod.quantidade

        const resultSave = await produto.save()

        const response = {
            mensagem : 'Dados do produto alterados com sucesso',
            produtoAlterado : {
                id_produto : Prod.id,
                nome : Prod.nome,
                preco : Prod.preco,
                categoria : Prod.categoria,
                desconto : Prod.desconto,
                quantidade : Prod.quantidade,
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

    try {
        
       Produto.destroy({ where : { id : req.params.id_produto }})

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
        console.log(error)
     return res.status(500).send({ error : error })   
    }
}