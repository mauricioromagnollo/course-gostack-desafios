/**
 * Testa se todos os elementos do array passam no teste proposto pela função;
 * 
 * @method array.every(callback,thisArg)
 * @returns {true || false}
 *  true: se todos os elementos do array passarem no teste
 *  false: se algum falhar
 */

const menorQueDez = numero => numero < 10

let array = [2, 18, -10, 9, -9]
console.log(array.every(menorQueDez))

array = [-10, 2, 1, -1, 0]
console.log(array.every(menorQueDez))