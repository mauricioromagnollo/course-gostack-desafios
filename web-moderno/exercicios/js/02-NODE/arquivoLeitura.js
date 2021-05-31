// file system
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// de forma síncrona... (Não é recomendado, trava o EventLoop)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


// leitura assíncrona (Não trava o EventLoop)
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// acessando arquivo direto
const config = require('./arquivo.json')
console.log('config.db = ',config.db)

fs.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})