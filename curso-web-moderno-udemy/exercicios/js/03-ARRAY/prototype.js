/**
 * Utilizando o Array.prototype, você consegue definir um novo método para os 
 * tipos de dados de Array;
 */

// Criando um protótipo que soma 10 a cada elemento do array:

Array.prototype.somaDez = function() {
    const newArray = []
    for(let i=0; i<this.length; i++) {
        this[i] += 10
        newArray.push(this[i])
    }
    return newArray
}

const array = [10,20,30,40,50]
console.log(array.somaDez())

const arrayNovo = [1,2,3]
console.log(arrayNovo.somaDez())