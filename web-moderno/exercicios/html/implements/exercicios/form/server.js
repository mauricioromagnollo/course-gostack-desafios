/**
 * Receber a requisição do tipo POST:
 * Uma vez que você submete os dados do formulário,
 * o body-parser vai fazer um parse no corpo do request (requisição),
 * pegar esses dados e jogar dentro do request.body;
 * 
 * Não basta somente usar o POST para uma request segura, é necessário ser https.
 */

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (request, resp) => {
    console.log(request.body)   // imprimindo o corpo do formulário
    resp.send('<h1>Parabéns. Usuário incluido!</h1>')
})

app.post('/usuarios/:id', (request, resp) => {
    console.log(request.body)   
    console.log(request.params.id)
    resp.send('<h1>Parabéns. Usuário alterado!</h1>')
})

app.listen(3003)