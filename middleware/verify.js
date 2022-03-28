const db = require('../db')

exports.delete = async (req, res, next) => {

    const id_produto = req.body.id_produto 
    
   const result = await db.execute('SELECT * FROM produtos WHERE id = ?', [id_produto])

   if(result.length == 0) {
       return res.status(500).send({
           mensagem : 'Não foi encontrado esse produto'
       })
   } 

   if(id_produto == 1) {
    return res.status(500).send({
        mensagem : 'Não pode remover essse produto'
    })
} else {
    next()
}

}