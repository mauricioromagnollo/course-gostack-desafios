/**
 * Copia parte de um array, sem modificar o seu tamano;
 * Sintaxe:
 *  array.copyWithin(target, start, end)
 *  @param {target}
 *      - Copia a sequência para o índice; 
 *      - Índice baseado em zero;
 *      - Se negativo, o alvo será contado a partir do final;
 *      - Se o alvo foi maior que array.length, nada será copiado;
 *      - Se o alvo for posicionado após o início, a sequência copiada será
 *        ajustada para caber no comprimento do array;
 *  @param {start}
 *      - Copia os elementos de;
 *      - Se o ínicio for otimido, terá como default=0
 *  @param {end}
 *      - Se o índice final for otimido, terá como default=array.length;
 * @returns 
 *      - Modifica o array original!
 */

let array = ['a', 'b', 'c', 'd', 'e'];
console.log(array.copyWithin(0, 3, 4));
// [ 'd', 'b', 'c', 'd', 'e' ]

array = ['a', 'b', 'c', 'd', 'e'];
console.log(array.copyWithin(1, 3));
// [ 'a', 'd', 'e', 'd', 'e' ]

array = ['a', 'b', 'c', 'd', 'e'];
console.log(array.copyWithin(1))
[ 'a', 'a', 'b', 'c', 'd' ]
