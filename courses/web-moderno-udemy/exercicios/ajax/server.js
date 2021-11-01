/**
 * Server para requisição AJAX
 * middleware -> função que será executada quando uma ou todas requisições chegarem
 */

 // interpretador de dados que vem da requisição, realiza parse dos dados
const bodyParser = require('body-parser')   
const express = require('express')
const app = express()
//const portaServidor = 2020
const portaServidor = 8080


// dentro da pasta atual, sirva os arquivos estáticos
app.use(express.static('.'))

// Se vier algum formulário, submit de formulário, esse será usado
app.use(bodyParser.urlencoded({ extended: true }))

// se vier um JSON, será aplicado esse código
app.use(bodyParser.json())

// se vier um comando do tipo get em /test
app.get('/teste', (req, res) => res.send('Ok'))


/**
 * Interpretador de formulário do arquivo upload
 * Fazendo upload de arquivo inserindo data como prefixo
 */
const multer = require('multer')

// personalizar pasta e nome do arquivo
const storage = multer.diskStorage({  
  destination: function (req, file, callback) {
    callback(null, './upload')
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
  upload(req, res, err => {
    if(err) {
      return res.end('Ocorreu erro')
    }

    res.end('Concluído com sucesso')
  })
})

// recebendo do formulário via fetch #fetch2
app.post('/formulario', (req, res) => {
  res.send({
    ...req.body,  // precisa do body-parser estar configurado
    id: 1
  })
})

//app.get('/parOuImpar/:numero', (req, res) => {
  // req.body
  // req.query
  // req.params

app.get('/parOuImpar', (req, res) => { 
  const par = parseInt(req.query.numero) % 2 === 0
  res.send({
    resultado: par ? 'par' : 'impar'
  })
})

app.listen(portaServidor, () => console.log('O Servidor Iniciou...Executando'))

app.listen(portaServidor, () => {
  console.log('Iniciou o server...')
})