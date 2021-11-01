/**
 * arrow function
 **** return implícito
 **** função arrow sempre é uma função anônima, por isso é necessário atribuir a uma variável
 **** quando vc possui único parâmetro, não é obrigado a colocar parênteses
 * ------------ let incrementar = cont => cont++   
 */

const soma = (a, b) => a + b
console.log(soma(2,3))

// Arrow Function (this)
    // o this está associado ao local onde a função foi escrita
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

// parâmetros default
function log(texto = 'Node') {       
    console.log(texto)
}

/* Exemplo sem parâmetro padrão
function log(texto) {       
    if (texto == undefined)
        texto = 'Node'
    console.log(texto)
}
*/

log()
log(undefined)
log('Sou mais forte')
log(null)

// operador rest ou spread "..."
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log('total \"Rest\" = ', total(2,3,4,5))