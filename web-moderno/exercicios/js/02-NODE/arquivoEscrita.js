const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// persistindo no disco rígido
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro => {
    console.log(erro || 'Arquivo salvo!')    
})