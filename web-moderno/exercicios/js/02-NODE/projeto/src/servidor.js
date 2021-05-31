/**
 * Configuração do ExpressJS:
 * server.js
 */


const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// para qualquer requisição que vc faça, esse passa pelo middleware
app.use(bodyParser.urlencoded({ extended: true })) 

// app.get('/produtos', (request, resposta, next) => {
//     console.log('Middleware 1...')
//     next()
// })

app.get('/produtos', (request, resposta, next) => {
    //resposta.send({nome: 'Notebook', preco: 123.45}) // converter para JSON - método send
    resposta.send(bancoDeDados.getProdutos())
})

// traz um produto específico baseado no (:id) passando parâmetros
app.get('/produtos/:id', (request, resposta, next) => {
    resposta.send(bancoDeDados.getProduto(request.params.id))
})

app.post('/produtos', (request, resposta, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,    // body -> corpo da requisição
        preco: request.body.preco
    })
    resposta.send(produto) // JSON
})

app.put('/produtos/:id', (request, resposta, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: request.params.id,
        nome: request.body.nome,    // body -> corpo da requisição
        preco: request.body.preco
    })
    resposta.send(produto) // JSON
})

app.delete('/produtos/:id', (request, resposta, next) => {
    const produto = bancoDeDados.excluirProduto(request.params.id)
    resposta.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})

// PESQUISAR:
// app.use
// app.post
// app.send