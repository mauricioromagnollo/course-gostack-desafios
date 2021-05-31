/**
 * Array.splice(i, nE, ...)
 * i = Índice do elemento que será removido
 * nE = Qtde de elementos que serão removidos a partir do índice "i";
 * ... = Elementos que podem ser inseridos;
 * 
 * Splice = Unir, Juntar, Emendar...
 * O método .splice() pode adicionar ou remover elementos do array;
 * É possível inserir um novo elemento no local do elemento removido;
 * É possível também remover ítens a partir de um índice do array;
 * Retorna um elemento ou array de elementos caso existam, ou um array vazio;
 */

const pilotos = ['Vettel', 'Alonso', 'Raikhonen', 'Massa', 'Ferrari', 'Rubin', 'Pirelli']
let retorno = []    // demonstração de retorno

// REMOVENDO UM ELEMENTO:
retorno = pilotos.splice(1,1)   

console.log('pilotos = ', pilotos)
console.log('retorno = ',retorno)
// pilotos =  [ 'Vettel', 'Raikhonen', 'Massa', 'Ferrari', 'Rubin', 'Pirelli' ]
// retorno = [ 'Alonso' ]

// REMOVENDO 3 ELEMENTOS A PARTIR DO ÍNDICE 3:
retorno = pilotos.splice(3,3)

console.log('pilotos = ', pilotos)
console.log('retorno = ',retorno)

// TENTANDO REMOVER UM ELEMENTO QUE NÃO EXISTE:
retorno = pilotos.splice(20,12)

console.log('pilotos = ', pilotos)
console.log('retorno = ',retorno)

// INSERINDO ELEMENTOS A PARTIR DA POSIÇÃO 3:
// O "0" NO PARÂMETRO INFORMA QUE NENHUM ELEMENTO SERÁ REMOVIDO, SOMENTE ACRESCENTADO!
retorno = pilotos.splice(3,0,'Senna', 'X0n4d0')

console.log('pilotos = ', pilotos)
console.log('retorno = ',retorno)