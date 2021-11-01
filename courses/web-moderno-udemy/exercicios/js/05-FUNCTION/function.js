/**
 * 
 */

// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(2,3)
// 5
imprimirSoma(2) 
// NaN

// Função com Retorno
function soma(a, b = 0) { // quando não passar parametro, b = 0
    return a + b
}

let final = soma(2,3)
console.log(final)
// 5
console.log(soma(3)) // b = 0
// 3

/*:::::::::::::::::::::::::::::::*/

// Armazenando uma função em uma variável
imprimirSoma = function(a, b) {
    console.log(a + b)
}

// Armazenando uma função arrow em uma variável
soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))
// 5

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

const imprimir = a => console.log(a)
imprimir('Criando um print em JS')

console.log(typeof Object)
// fuction

class Produto {}
console.log(typeof Produto)
// function
console.log(typeof new Produto)
// object

// Função em JS é First-Class Object (Citizens)
// ou Higher-order function
// JS trata a função como um Dado

// criar de forma literal
// toda função sempre retorna undefine, caso ela seja "void", não tenha return
function fun1() { }

// Armazenar função em uma variável
const fun2 = function() { }

// Armazenar dentro de um array
const array = [function(a,b) {return a+b}, fun1, fun2]
console.log('array[0](2,3) = ',array[0](2,3))  // executando a função dentro do array

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'} // alocando dinamicamente a função dentro do objeto
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando....')})

// Uma função pode retornar/conter uma função
function somar(a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}
// chamada da função 
somar(2,3)(4)
// também funciona
const cincoMais = somar(2,3)
cincoMais(4)


/** Parâmetros e Retornos Opcionais */
function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,4))
console.log(area(5, 5)) // retorna undefined