/**
 * Callback:
 * Passar uma função e essa função será chamada quando um evento acontecer
 * Como no exemplo, o evento é o loop para cada elemento, chamando a função
 * callback para cada elemento.
 */

const BROWSER = false

const fabricante = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricante.forEach(imprimir) // vai chamar a função pra cada elemento encontrado, callback = chamar de volta

fabricante.forEach(function(fabricante){  //deixando mais explicito com o atrib. fabricante
    console.log(fabricante)
})

// mesma coisa de cima com arrow
fabricante.forEach(fabricante => console.log(fabricante))

// extraindo menores que 7 com e sem callback, veja a diferença:

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
const notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

// com arrow e callback
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// com arrow e callback + 1 função reutilizável no códido para verificar nota
// mais legível e reutilizável
const notasMenorQue7 = nota => nota < 7 // retorna true ou false para o filter
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)

if(BROWSER) {
    // Exemplo de callback no browser
    document.getElementsByTagName('body')[0].onclick = function (e) {
        console.log('O evento ocorreu!')
    }
}