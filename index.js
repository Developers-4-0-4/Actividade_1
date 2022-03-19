const exepress = require('express')
const app = exepress()
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config();
const db = require('./db')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(3008, (error) => {
    if (!error) {
        console.log("Servidor rodando na porta 3008")
    } else {
        console.log("Ocorreu um erro" + error)
    }
});