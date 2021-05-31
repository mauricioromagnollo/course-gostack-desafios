/**
 * O método sort não ordena por ordem de tamanho!!!
 * Modifica o array original e não salva uma cópia!
 * Ele verifica o primeiro caracter o dígito;
 * @returns { novoArray e modifica Original}
 */

var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// ["Dec", "Feb", "Jan", "March"]
// Ele ordenou de acordo com o primeiro char da string

var array1 = [1, 30, 4, 21, 200, 100000];
const arraySave = array1.sort();
console.log(array1);
// [1, 100000, 200, 21, 30, 4]
// Ordenou de acordo com o primeiro dígito.