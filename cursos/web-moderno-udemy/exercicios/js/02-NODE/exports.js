console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 // a será visível fora do arquivo
exports.b = 2 // b também
module.exports.c = 3

exports = null  // exports é diferente, porque é um outro modo de fazer a mesma coisa
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }