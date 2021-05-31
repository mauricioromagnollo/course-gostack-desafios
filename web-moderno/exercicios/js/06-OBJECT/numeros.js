const peso1 = 1.0
const peso3 = 1.1
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso3))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) // toFixed(2) == duas casas decimais
console.log(media.toString())
console.log(media.toString(2)) // Transformando para binário
console.log(typeof media)
console.log(typeof Number)

/* CUIDADO! */

console.log(7 / 0)
console.log(7 / 0.0001)
console.log("10" / 2) // Converte automaticamente
console.log('3' + 2) // ele não vai somar, vai concatenar
console.log("Show!" * 2) // NaN = Not a Number
console.log(0.1 + 0.7) // Cuidado algumas operações terão imprecisões IEEE
//console.log(10.toString()) // Não funciona
console.log((10.345).toFixed(2)) // assim funciona
console.log((10.345).toString())