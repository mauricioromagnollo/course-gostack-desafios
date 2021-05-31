/** 
 * JSON: JavaScript Object Notation,
 * A diferença é que JSON os atributos são strings,
 * Não é um objeto, é um formato textual do Objeto
 * Não é um objeto, é um formato textual do Objeto.
 */

// Exemplo de Objeto em JS:
const produto = {
    nome: 'Camisa Polo',
    preco: 79.90,
}

// Exemplo de JSON:
'{ "nome": "Camisa Polo","preco": 79.90 }'

/**
 * JSON.parse(json)
 * Retorna um obj de JavaScript passando um JSON como parâmetro
 * Parse JSON > ObjJS
 */

console.log('*******Exibindo JSON e JS Object**********')
let produtoJson = '{"nome": "Notebook","preco": 2200.99,"marca": "Asus"}'
let produtoJS = JSON.parse(produtoJson) 
console.log(produtoJson)
console.log(produtoJS)

/**
 * JSON.stringfy(obj)
 * Retorna um JSON passando um obj de JavaScript como parâmetro
 * Parse ObjJS > JSON
 */

console.log('*******Exibindo JSON e JS Object**********')
let newJson = JSON.stringify(produtoJS)
console.log(newJson)
console.log(produtoJS)