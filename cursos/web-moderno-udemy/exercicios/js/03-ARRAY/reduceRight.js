/**
 * Realiza operações nos elementos do array com acumulador,
 * porém, da esquerda para a direita do array;
 */

const soma = (n,nProx) => n + nProx 
const array = [1, 2, 7]
console.log(array.reduceRight(soma))
// 10
const multiplica = (n, nProx) => n*nProx
const array2 = [0, 2, 5]
console.log(array2.reduceRight(multiplica))
// 0