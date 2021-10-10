/**
 * Array.forEach(function(p1,p2,...) {
 *      ...
 * })
 * 
 * Uma das formas de percorrer um array com propósito;
 * O forEach não modifica o array original;
 */

const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})

console.log('--------------------------')
aprovados.forEach(nome => console.log(nome))

console.log('--------------------------')
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

/**
 * Implementando um forEach na mão:
 */

 Array.prototype.forEach2 = function(callback) {
    for(let i=0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})


/**
 * Outro exemplo de forEach():
 */

console.log('--------------------------')

let onlines = 0
let indicesOnline = []
const pessoasOnline = []

const Pessoas = [
  { nome:"P1", idade:20, sexo:'M', online: true },
  { nome:"P3", idade:21, sexo:'F', online: false },
  { nome:"P4", idade:13, sexo:'M', online: true },
  { nome:"P2", idade:4, sexo:'F', online: true },
  { nome:"P5", idade:22, sexo:'M', online: false },
  { nome:"P6", idade:32, sexo:'M', online: false },
  { nome:"P7", idade:73, sexo:'F', online: true }
]

Pessoas.forEach((pessoa, indice) => {
  if(pessoa.online == true) {
    onlines++
    pessoasOnline.push(pessoa)
    indicesOnline.push(indice)
  }
})

console.log('onlines = ', onlines)
console.log('indicesOnline = ', indicesOnline)
console.log('pessoasOnline = ', pessoasOnline)
console.log('Pessoas = ', Pessoas)