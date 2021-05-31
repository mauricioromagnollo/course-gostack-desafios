/**
 * let novoArray = array.concat(array1, array2, arrayN)
 * "Concatena" uma string,vetor...
 *  @returns
 *      - new Array instance!
 */

const filhas = ['Valesca', 'Cibalena']
const filhos = ['Xurenay', 'Steroslav']
const todos = filhas.concat(filhos)
const todosMaisUm = filhas.concat(filhos, 'Xamusketa') 

console.log(todos)
console.log(todosMaisUm)
console.log(filhas)
console.log(filhos)

// Outros exemplos
console.log([].concat([1,2],[3,4],5,[[6,7]]))
console.log(['a', 'b'].concat([1,2],[3,4],5,[[6,7]]))