/**
 * Procura um elemento no array que satisfaz o método proposto;
 * @method array.find(callback,thisArg)
 * @returns { firstElement || undefined }
 */

const maiorQueDez = numero => numero > 10

const array = [1, 12, 6, 7, 18]
console.log(array.find(maiorQueDez) == 12)

const outroArray = [2, -1, 0, 10]
console.log(outroArray.find(maiorQueDez) == undefined)