/**
 * Retorna um novo array a partir do parâmetro passado!
 * Array.from(arrayLike[, mapFn[, thisArg]])
 */

console.log(Array.from('foo'));
// ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// [2, 4, 6]