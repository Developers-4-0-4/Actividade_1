const Sequelize = require('sequelize')
const sequelize = new Sequelize('actividade_1','root','',{
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
    console.log("Conectado com sucesso")
}).catch((err)=>{
    console.log("Ocorreu um erro no servidor"+err)
})

module.exports ={
    Sequelize:Sequelize,
    sequelize:sequelize
}