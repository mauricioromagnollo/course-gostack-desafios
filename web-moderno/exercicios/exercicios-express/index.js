const SERVER_PORT = 3000

const app = require('express')()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')

require('./api/produto')(app, 'texto Do Param')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

// Qualquer texto que chegar no corpo da requisição será interpretado
app.use(bodyParser.text())
// Qualquer JSON que chegar no corpo da requisição será interpretado
app.use(bodyParser.json())

// Interpretando dados do tipo urlencoded (Padrão de formulário!!)
app.use(bodyParser.urlencoded({ extended: true }))


app.use(saudacao('Xonado'))

app.use('/opa', (req, res, next) => {
  console.log('Será que serei chamado?')
  next() // executa a próxima função
})

app.post('/clientes/relatorio', (req, res) => {
  res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
  // let corpo = ''
  
  // req.on('data', function(parte) {
  //   corpo += parte
  // })

  // req.on('end', function() {
  //   res.send(corpo)
  // })
  res.send(req.body) // retornando o body feito pelo body-parser, sem precisar de .on('data') ou .on('end')
  // req.body.nomeDoAtributo
  // também irá funcionar

})

app.get('/clientes/:id', (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, res) => {
  
  // RETORNANDO HTML
  // res.send('<h1>Suave!</h1><br></br><p>Retornando tipo HTML!</p>')
  
  // RETORNANDO JSON
  
  res.json({
    data: [
      {id: 2, name: 'Ana', position: 1},
      {id: 3, name: 'Ana', position: 2},
      {id: 4, name: 'Xurenay', position: 3},
      {id: 5, name: 'Jão', position: 4}
    ],
    count: 20,
    skip:0,
    limit: 2,
    status: 200
  })
  
  // res.json([
    //   {id: 2, name: 'Ana', position: 1},
    //   {id: 3, name: 'Ana', position: 2},
    //   {id: 4, name: 'Xurenay', position: 3},
    //   {id: 5, name: 'Jão', position: 4}
    // ])
    
    // res.json({
      //   nome: 'iPad 32GB',
      //   price: 1222.00,
      //   discount: 0.12
      // })  
      
})
    
    
// EXECUTA QUALQUER TIPO DE REQUISIÇÃO get, post...
// app.use('/opa', (req, res) => {
//   res.send('<h1>Suave!</h1>')
// })
      
app.listen(SERVER_PORT, () => {
  console.log(`[*] Backend => porta: ${SERVER_PORT}`)
})
      
// exportando app para testes
module.exports = app