/** 
 * Array
 * JavaScript permite definir um array heterogêneo [true, 1, 3.3, {}, ...],
 * porém, não é considerado uma boa prática;
 * É possível fazer alocações dinâmicas nos arrays em JavaScript;
 * Por definição/boas práticas, definimos uma variável array ou de objetos como
 * uma constante 'const', você consegue alterar os elementos e não ocorre o erro
 * da variável que referencia o array ou objeto ser apontada para outro lugar;
 * Não existe um tipo de dados Array em JS, ele é considerado
 * um Objeto;
 * O método de declarar um array "padrão" é a Forma Literal;
 *
 */

// Exemplo de alocação dinâmica:
const valores = [7, 8, 6, 9]
console.log(`Valores = ${valores} | Size = ${valores.length}`)
// Valores = 7,8,6,9 | Size = 4
console.log(valores[4]) // cuidado! Não é reportado esse erro! Retorna undefined
// undefined
valores[4] = 10
console.log(`Valores = ${valores} | Size = ${valores.length}`)
// Valores = 7,8,6,9,10 | Size = 5

// Definição de Forma Literal:
const array = []

console.log(array[1] === undefined)
// true
console.log(array[1] === null)
// false
console.log(typeof Array, typeof new Array, typeof [])
// function object object

// Essa forma não é muito recomendável, a notação literal sim!
const aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
// [ 'Bia', 'Carlos', 'Ana' ]

// Simulando um array utilizando objeto:
const quaseArray = {0:'Rafael', 1:'Ana', 2:'Bia'}
console.log(quaseArray)
// { '0': 'Rafael', '1': 'Ana', '2': 'Bia' }
Object.defineProperty(quaseArray,'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])
// Rafael

const meuArray = ['Rafael','Ana','Bia']
console.log(quaseArray.toString(), meuArray)
// [ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ]