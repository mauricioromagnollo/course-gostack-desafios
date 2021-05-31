/**
 * Verifica se um array inclui um determinado valor em seus elementos
 * retornando true ou false;
 * 
 * @method array.includes(value)
 *      - value: podendo ser qualquer valor de um elemento em um array;
 * @returns { true || false }
 *      - true: se houver algum elemento que é igual a @param {value};
 *      - false: caso contrário
 */

const array = [1, 2, 3, 4]

console.log(array.includes(2))
console.log(array.includes(3))
console.log(array.includes(-1))