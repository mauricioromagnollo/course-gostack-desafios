/**
 * Quando você exporta default, você não obrigatoriamente precisa ter o nome do método:
 * 
 * export default function() { ... }
 * 
 * Além de quando for importar, você pode colocar o nome que quiser e não precisa fazer
 * o destructuring.
 * 
 * import retangulo from './retangulo'
 */


import areaRetangulo from './retangulo';
// import { areaRetangulo } from './retangulo';
import { areaCircunferencia } from './circunferencia';
// import { areaCircunferencia as circ } from './circunferencia';

console.log('Módulo carregado...')
console.log(areaRetangulo(7, 8)) //56
console.log(areaCircunferencia(2)) // 12.56

const { digaOi } = require('./novo');
console.log(digaOi('Ana'))
