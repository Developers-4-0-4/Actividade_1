const exepress = require('express')
const app = exepress()
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config();
const Produtos = require('./routers/Produtos')

app.use(cors())
app.use(bodyParser.urlencoded({ extends: false }))
app.use(bodyParser.json())

app.use('/produtos', Produtos)

app.listen(3008, (error) => {
    if (!error) {
        console.log("Servidor rodando na porta 3008")
    } else {
        console.log("Ocorreu um erro" + error)
    }
});
