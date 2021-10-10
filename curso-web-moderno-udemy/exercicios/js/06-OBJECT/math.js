/**
 * Objeto de JavaScript (Math)
 */

let valores = [1.1, 1.4, 1.5, 1.6, 1.9]

console.log('\t\t| Math. |')
console.log('**Valores = ', valores)
for(let i=0; i<valores.length; i++) {
    console.log('   ----------------------')
    console.log('   teste valor = ', valores[i])
    console.log('   ----------------------')
    console.log('   .floor() = ', Math.floor(valores[i]))
    console.log('   .fround() = ', Math.fround(valores[i]))
    console.log('   .round() = ', Math.round(valores[i]))   
}

console.log('   -------------------------')
console.log('   Constantes:')
console.log('   -------------------------')
console.log('   .PI = ', Math.PI)

const raio = 5.6
const area = Math.PI * Math.pow(raio,2)
console.log(area)
console.log(area.toFixed())
console.log(typeof Math)