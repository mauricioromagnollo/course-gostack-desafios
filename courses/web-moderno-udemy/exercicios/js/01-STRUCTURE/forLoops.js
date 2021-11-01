console.log('*************For símples******************')
for(let i=0; i<10; i++) {
    console.log(i)
}

console.log('*************For Vetor******************')
const notas = [6.7, 3.3, 2.2, 45.6, 1.0]
for(let i=0; i<notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}

console.log('*************For in******************')
const num = [6.7, 3.3, 2.2, 45.6, 1.0]
for(let i in notas) {
    console.log(i, num[i])
}

console.log('*************For in (Obj)************')
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

/*
    DO-WHILE
*/

let opcao = 5

do {
    console.log('Fiz a primeira repetição')
    opcao--
}while(opcao != -1)

/*
    SWITCH CASE
*/

switch(var) {
    case 1: 
        suhdaud9()
        break
    case 2:
        saljdalkjsdlkajsd()
        break
    case 3: case 4: // isso é válido
        funcao()
        break
    default:
        alert("Erro")
        break
}

/*
    WHILE
*/

let x = 10

while(x > 0) {
    console.log('Xurenay')
    x--
}


/**
 * 
 */

for(let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for( let assunto of assuntosMap) {
    console.log(assunto)
}

// percorrer só as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])

for (let letra of s) {
    console.log(letra)
}