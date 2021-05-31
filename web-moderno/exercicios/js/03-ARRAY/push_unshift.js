/**
 * Array.push(p)    -> Insere elemento no final do array (pilha *topo)
 * Array.unshift(p) -> Insere um elemento no início do array (fila *frente)
 * Aumenta o tamanho do array (Array.length);
 * Retorna o índice que foi alocado;
 */

const numeros = [4,6,2,12,76,15]

console.log(numeros.push(10))
// 7 (índice)
console.log(numeros.unshift(-10))
// 8
console.log(numeros)
// [ -10, 4, 6, 2, 12, 76, 15, 10 ]