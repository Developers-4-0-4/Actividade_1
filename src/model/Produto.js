const Sequelize = require('sequelize');
const db = require('../../db');
 
const Produto = db.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE
    },
    categoria : {
        type : Sequelize.STRING
    },
    desconto : {
        type : Sequelize.DOUBLE
    },
    quantidade : {
        type : Sequelize.INTEGER 
    }
})
 
module.exports = Produto;