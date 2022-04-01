/**
 * 
 */


const array = [1,2,3,4]
for(let i of array)
    console.log(i)

const array2 = ['w', 'y', 'k', 'o', 'p'];
const elementos = array2[Symbol.iterator]();
console.log(elementos.next().value)
console.log(elementos.next().value)
console.log(elementos.next().value)
console.log(elementos.next().value)
console.log(elementos.next().value)
