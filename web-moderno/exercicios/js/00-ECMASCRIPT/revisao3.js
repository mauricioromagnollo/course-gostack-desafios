// ES8: Object.values/Object.entries
const obj = { a:1, b:2, c:3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(nome) {
        return `Olá ${nome}!`
    }
}

console.log(`Nome = ${pessoa.nome} \n ${pessoa.ola('Jão')}`)
console.log(pessoa.ola('José'))

// class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log('Dog = ', new Cachorro().falar())