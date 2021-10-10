/**
 * Utilizando módulos do node_modules/lodash
 * É muito comum referenciar variáveis do lodash com "_".
 * O arquivo que sempre é carregado por padrão é o index.js
 * módulos de terceiros não é preciso informar o caminho.
 * É possível criar uma pasta também dentro de node módules, por padrão ele
 * procura um arquivo chamado "index.js", basta criar um diretório dentro de
 * node_modules, ao lado do lodash, e criar um arquivo index.js. !! Porém, isso
 * não é uma boa prática. Não são criados módulos dentro de node_modules, isso é só
 * um exemplo de como ele funciona.
*/
const _ = require('lodash')

setInterval(() => console.log(_.random(1,1000)), 2000)