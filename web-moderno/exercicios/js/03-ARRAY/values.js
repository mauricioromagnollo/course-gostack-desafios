/** ??
 * Retorna um novo objeto de Array Iterator que contém os valores para cada índice no array;
 */
const array = [2, 3, 10, 12, 25]
const valores = array.values()

for(let i of valores) {
    console.log(i)
}
