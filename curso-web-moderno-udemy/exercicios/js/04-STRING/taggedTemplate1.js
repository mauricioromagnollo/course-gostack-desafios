/**
 * Tagged Template
 * Conseguir processar uma template string dentro de uma função
 */

function tag(partes, ...valores) {
    console.log(partes) // [ '', 'está', '' ]
    console.log(valores) // [ 'Gui', 'Aprovado' ]
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag ` ${aluno} está ${situacao}`)

// --------------------------------------------------------

