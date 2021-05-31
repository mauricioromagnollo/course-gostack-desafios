/**
 * const novoArray = Array.slice(i)
 * const novoArrayLim = Array.slice(i,n)
 * i = índice que será recortado o novo array;
 * n = índice que indica até onde o array será "fatiado";
 *  lembrar que é (n - 1) até onde você quer fatiar.
 *  Ex: Se vc quer fatiar um vetor em outro que pega o segundo, terceiro e quarto elemento,
 *      você deve declarar assim:   let vetorFatiado = vetorOriginal.slice(2,5)
 *      - O elemento 5 não irá entrar.
 * 
 * Slice = fatiar
 * O Slice serve para fatiar um Array, retornando um novo array podendo ser a partir de um índice,
 * até o final do array, ou de i até n em um array.
 */

const pessoas = ['Jão', 'Carlos', 'Xurenay', 'Steroslav', 'Branca', 'Morena']
const dogs = pessoas.slice(pessoas.length - 2)
const osMalucos = pessoas.slice(2,4)

console.log('dogs = ', dogs)
console.log('os malucos = ', osMalucos)