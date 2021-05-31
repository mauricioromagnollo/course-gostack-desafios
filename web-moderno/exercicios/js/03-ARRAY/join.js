/**
 * Cria e retorna uma nova cadeia de caracteres concatenando todos os elementos
 * em um array (ou um objeto semelhante a um array), separados por vírgulas ou
 * por uma string separadora passada no @param;
 * 
 * @method array.join(paramStr)
 *      - Quando não é definido um parâmetro, a separação padrão é ',';
 * @returns { string }
 */

var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// 'Fire,Wind,Rain'

console.log(elements.join(''));
// 'FireWindRain'

console.log(elements.join('-'));
// 'Fire-Wind-Rain'