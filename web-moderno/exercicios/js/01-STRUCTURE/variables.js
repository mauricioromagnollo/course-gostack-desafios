/**
 * let   = Variáveis que podem ser modificadas
 * const = Variáveis constantes, utilizado também para declarar vetores e objetos,
 *         
 */

let x = 10, y = 20
const VALUE_CONST = 20, VALUE_CONST2 = 10

/*
    - Sempre utilizar o let;
    - Com var você consegue redeclarar a variável, com let não. Gera erro!
*/

var numero = 1
{
    let numero = 2
    console.log('dentro = ',numero)
}
console.log('fora = ', numero)

// ------------------------------------------

for(let i=0; i < 10; i++) { // i será visível somente dentro do for
    console.log(i)
}
//console.log('i = ', i)

// ------------------------------------------

const funcs = []

for(let i = 0; i<10; i++) {
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]() // 2
funcs[8]() // 8

// uma função em JS é um closer, ou seja, ela tem consciência de onde ela foi definida

// ------------------------------------------

/** Var:
 * 
 */

/*::::::::::::::::::::::::::::::*/

{{{{ var sera = 'Será??' }}}}

console.log(sera)

function teste() {
    var local = 123
}

teste()
console.log(local)

/*::::::::::::::::::::::::::::::*/

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

/*::::::::::::::::::::::::::::::*/

for(var i=0; i < 10; i++) {
    console.log(i)
}
console.log('i = ', i)

/*::::::::::::::::::::::::::::::*/

const funcs = []

for(var i = 0; i<10; i++) {
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]() // 10
funcs[8]() // 10

/*::::::::::::::::::::::::::::::*/

var a = 3
let b = 2.7

var a = 30
// let b = 40
b = 40

console.log(a,b)

/*
    Com var você consegue redeclarar uma variável,
    utilizando let gera erro.
*/

const c = 5
console.log(c)