/**
 * O filter serve para literalmente filtrar um array, retornando um elemento
 * para um novo array, quando essa condição do filtro for verdadeira (true).
 * Retorna um novo array, quando for true para cada elemento do array, dada a função
 * como parâmetro do filter.
 */

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]
/*
console.log(produtos.filter(function(p) {
    return p.preco > 2500   // retornando somente os elemntos com preco maior que 2500
}))
*/

// Método de resolver 01:
console.log('*****************método 01********************')
const frageis = produtos.filter(p => p.fragil == true)
const produtosCaros = produtos.filter(p => p.preco >= 500)
console.log('Frageis = ', frageis)
console.log('Caros = ', produtosCaros)

// Método de resolver 02, criando um filtro maior:
console.log('*****************método 02********************')
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

const prodFinalArray = produtos.filter(caro).filter(fragil)
console.log('Produtos Finais = ', prodFinalArray)
//console.log(produtos.filter(caro).filter(fragil))


/**
 * Implementando o método .filter():
 */

Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i=0; i<this.length; i++) {
        if(callback(this[i], i, this)) { // se for true adiciona
            newArray.push(this[i])
        }
    }
    return newArray
}

console.log(produtos.filter2(caro).filter2(fragil))