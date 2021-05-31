/**
 * Array.reduce(...)
 * Transformar um array em algo.
 * O reduce faz um callback com cada elemento, armazenando o valor das interações
 * e passando para o próximo elemento.
 * Sempre um elemento é o acumulador;
 * O reduce AGREGA os valores.
 */

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){ 
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log('Resultado Final = ',resultado) // = 35


// Mesma coisa, porém passando um valor inicial no reduce
console.log('======================================')
const comAcumuladorInicial = alunos.map(a => a.nota).reduce(function(acumulador, atual){ 
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)   // passando 10 como valor inicial do acumulador = 45

console.log('Resultado Final = ',comAcumuladorInicial)

// Todos os alunos são bolsistas?
const isTodosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(isTodosBolsistas))

// Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

/**
 * Criando um reduce na mão para entender a implementação.
 */

Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i=1; i<this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma))