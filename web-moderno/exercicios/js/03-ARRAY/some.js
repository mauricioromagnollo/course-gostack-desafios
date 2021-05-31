/**
 * Verifica se algum elemento do array satisfaz a função como parâmetro;
 * @returns {true || false}
 */

const numeroPar = n => (n % 2 == 0)

const array = [1,3,5,11,10,5]
console.log(array.some(numeroPar))
// true
// foi verificado se existe algum numero par no array

const array2 = [1,3,5,11,5]
console.log(array2.some(numeroPar))
// false