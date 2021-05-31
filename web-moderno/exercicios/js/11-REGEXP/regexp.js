/**
 * RegExp = Regular Expression
 */

// Exemplo de RegExp com troca de nomes:
const re = /(\w+)\s(\w+)/
let nome = 'John Smith'
const nomeInv = nome.replace(re, "$2, $1")
console.log(nomeInv)

// Mesma Coisa, com modo de escrever diferente
const reg = new RegExp(/(\w+)\s(\w+)/)
let nome2 = 'John Smith'
const nomeInvertido = nome2.replace(reg, "$2, $1")
console.log(nomeInvertido)

// Mesma coisa com outro modo de escrever
let nome3 = 'John Smith'
const nomeInvertido2 = nome3.replace(/(\w+)\s(\w+)/, "$2, $1")
console.log(nomeInvertido2)