/** FUNÇÕES ARROW:
 * O this na função arrow é constante
 * ele respeita seu contexto léxico
 * Arrow Functions facilitam a escrita em uma única linha;
 * Possuem o retorno "return" implícito;
 * Não é necessário () caso a função possua um único parâmetro;
 * Ex: 
 *      let imprime = (a) => console.log(a)
 *      // pode ser reescrita sem "()":
 *      let imprime = a => console.log(a)
 * Funções que não possuem parâmetros, escrevemos com ().
 * Ex:
 *  let imprimeTitulo = () => console.log('|-- TÍTULO --|')
 */

/**
 * Escrevendo uma função "normal";
 * Exceto pelo operador 'let', pois normalmente funções são escritas
 * utilizando const, pois não podem ser modificadas.
 * Mas como eu preciso alterar a variável para não criar várias, estou utilizando let;
 */
let dobro = function (a) {  
    return 2 * a
}

dobro = (a) => {    // escrevendo a mesma função, porém no formato "arrow"
    return 2 * a
}

dobro = a => 2 * a  // escrevendo a mesma função, representada em uma única linha

console.log(dobro(Math.PI))
// 6.283185307179586

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'   // forma padrão de escrita
ola = _ => 'Olá' 
console.log(ola())
// Olá


/**
 * Ex. de arrow funcion em um objeto:
 */  forma "normal" de escrever uma função

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

// new Pessoa

/**
 * O this em funções arrow:
 * 
 * Legenda:
 *  Contexto do Node: (N)
 *  Contexto do Browser: (B)
 */

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)  
// N=true, B=false

const obj = {}
comparaComThis = comparaComThis.bind(obj) // this apontando para obj

comparaComThis(global)  
// false
comparaComThis(obj)
// true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
// false
comparaComThisArrow(module.exports)
// true
comparaComThisArrow(this)
// true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
// false
comparaComThisArrow(module.exports)
// true
