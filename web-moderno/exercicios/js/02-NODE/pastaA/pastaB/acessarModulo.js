const moduloA = require('../../moduloA')
console.log(moduloA.ola)
console.log(moduloA)
console.log(moduloA.ateLogo)
console.log(moduloA.bemVindo)

const moduloB = require('../../moduloB')
console.log(moduloB)

// Executando pasta que possui um index.js
// Não precisa referenciar o nome do arquivo
// o Arquivo index pode ser uma forma única de você referenciar vários módulos
const c = require('./pastaC')

console.log('c.ola2 = ', c.ola2)