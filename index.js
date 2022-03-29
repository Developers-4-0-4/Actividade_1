(async () => {
    const database = require('./db');
 
    try {
        const result = await database.sync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})();

const exepress = require('express')
const app = exepress()
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config();
const routaProdutos = require('./src/routers/Produtos')

app.use(cors())
app.use(bodyParser.urlencoded({ extends: false }))
app.use(bodyParser.json())


app.use('/produtos', routaProdutos)
app.listen(3008, (error) => {
    if (!error) {
        console.log("Servidor rodando na porta 3008")
    } else {
        console.log("Ocorreu um erro" + error)
    }
});
