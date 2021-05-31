/** Destructuring:
 * Novo recurso do ES2015
 * 
 */

console.log('*************exemplo 01*************')

 const pessoa = {
     nome: 'Ana',
     idade: 5,
     endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }     
 }

const { nome, idade } = pessoa // retirando nome e idade de dentro do objeto pessoa
console.log(nome,idade) // Ana 5

const { nome: n, idade: i} = pessoa // criando variáveis com outro nome
console.log(n, i) // Ana 5

const {sobrenome, bemHumorada = true} = pessoa // se não tiver o atrib. bemHumorada, ele será true
console.log(sobrenome, bemHumorada) // sobrenome é undefined, não foi declarado

const {endereco: {logradouro, numero, cep} } = pessoa // extraindo de endereco
console.log(logradouro, numero, cep)

console.log('*************exemplo 02*************')

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[,8, 8],[9, 6, 8]]
console.log(nota)

console.log('*************exemplo 03*************')

function rand({min = 0, max = 1000}) {   // tirando min e max de um objeto passado por parametro
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955})) // o max já está definido no método
console.log(rand({})) // passando objeto vazio
//console.log(rand())

console.log('*************exemplo 04*************')

function randomic([min = 0, max = 1000]) {
    if(min > max)   [min,max] = [max,min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(randomic([50, 40]))
console.log(randomic([992]))
console.log(randomic([, 10]))
console.log(randomic([]))
//console.log(randomic())