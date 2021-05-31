const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => { // usando destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { // definindo permissões/propriedades
    enumerable: true,   // aparecerá na lista de chaves?
    writable: false,    // poderá ser modificada?
    value: '01/01/2019' // valor
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

// Object.assign(ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // pega todos os atributos e concatena em um novo objeto
console.log(obj)    // o valor será sobrescrito para atributos iguais até o último

Object.freeze(obj)
obj.c = 123
console.log(obj)
