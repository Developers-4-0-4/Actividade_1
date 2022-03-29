const Produto = require('../model/Produto')

exports.delete = async (req, res, next) => { 
    
    const id_produto = req.params.id_produto


   if(id_produto == 1) {
    return res.status(500).send({
        mensagem : 'Não pode remover essse produto'
    })
} else {
    next()
}

}