/**
 * o Map serve para retornar de um array, outro array com propriedades
 * é um for com propósito.
 * Literalmente mapear cada elemento do array.
 * O map não modifica o array atual.
 */

const nums = [1,2,3,4,5]

// retornando um novo array com o dobro do primeiro
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

// lembrando que função arrow tem retorno implícito
const soma10 = e => e + 10 
const triplo = e => e + 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)


/**
 * Implementando o map na mão.
 */

Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i=0; i<this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

// Retornar um array apenas com os preços

resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)