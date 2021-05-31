/**
 * unary operators
 */
let num1 = 1
let num2 = 2

num1++
console.log(num1)
// 2
--num1
console.log(num1)
// 1
console.log(++num1 === num2--)
// true
console.log(num1 === num2)
// false


/**
 * ternary operators
 */

const a = 10
const x = (a > 10) ? a : -1 
console.log(x)
// -1
const resultado = nota => (nota >= 7) ? 'Aprovado' : 'Reprovado'
console.log(resultado(7.1))
// Aprovado
console.log(resultado(6.9))
// Reprovado

const a = 7
let b = 3

console.log(b += a)
// 10
console.log(b -= 4)
// 6
b *= 2
console.log(b)
// 12
b /= 2
console.log(b)
b %=2
console.log(b)
// 0
console.log(2.998e8)
// 2.998 × 10 8 = 299,800,000
console.log(144 % 12)
// 0
console.log(4 % 3)
// 1
console.log( ((1 - 2)+ 1) == 0 )
// true
console.log( (-(0 - 1)) == 1 )
// true
console.log( (-(1)) == -1 )
// true