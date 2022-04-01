/**
 * Array.pop()   ->  Remove o último elemento do array (topo *pilha)
 * Array.shift() ->  Remove o primeiro elemento do array (frente *fila || base *pilha)
 * Reduz o tamanho do array (Array.length);
 * Retorna o elemento removido ou undefined
 */

const numeros = [4,6,2,12,76,15]
const numeros_copia = [4,6,2,12,76,15]

console.log(numeros.pop())
// 15
console.log(numeros.length)
// 5
console.log(numeros_copia.shift())
// 4
console.log(numeros_copia.length)
// 5

const vazio = []
retorno = vazio.shift()
console.log(retorno)
// undefined
console.log(vazio)
// []