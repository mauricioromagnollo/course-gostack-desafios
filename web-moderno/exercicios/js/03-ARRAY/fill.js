/**
 * fill = preencher
 * 
 * array.fill(value, start, end)
 *  @param {value} -valor que irá preencher o array
 *  @param {start} -índice inicial, default=0
 *  @param {end}   -índice final, default=this.length
 * Retorna o array modificado;
 */

const array = [1, 2, 3, 4, 5]

// insere 0 no array a partir do índice 3:
console.log(array.fill(0,3))
// [ 1, 2, 3, 0, 0 ]

// insere 6 em todo array: 
console.log(array.fill(6))
// [ 6, 6, 6, 6, 6 ] 

// insere 5 no array do índice 0 até o índice 3:
console.log(array.fill(5,0,3))
// [ 5, 5, 5, 6, 6 ] 