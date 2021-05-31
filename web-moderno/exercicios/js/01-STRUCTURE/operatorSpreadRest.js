/**
 * É possível usar o operador "..." como 'Rest'(Juntar) ou 'Spread'(Espalhar)
 * 
 * Como Rest é bastante utilizado como parâmetro de função, fazendo com que
 * seja possível passar n variáveis (a, b, c, ...) como argumentos;
 * 
 */

function somar(...numeros) {    // usar como rest em parâmetro de função
    let soma = 0
    for(let i=0; i<numeros.length; i++) {
        soma += (numeros[i] || 0)
    }
    return soma
}
console.log(somar(2,3,5))
// 10
console.log(somar())
// 0
console.log(somar(1,1))
// 2

const funcionario = { nome: 'Maria', salario: 12348.99 } 
const clone = {ativo: true, ...funcionario}     // usar operador como spread em objeto
console.log(clone)
// { ativo: true, nome: 'Maria', salario: 12348.99 }

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria',...grupoA,'Rafaela'] // usar como spread em array
console.log(grupoFinal)
// [ 'Maria', 'João', 'Pedro', 'Gloria', 'Rafaela' ]