/**
 * Closure é o escopo criado quando uma função é declarada,
 * esse escopo permite a função acessar e manipular variáveis
 * externas a função;
 * Habilidade de tratar funções como valores;
 * Variáveis são recriadas toda vez que uma função é invocada;
 * Variáveis locais são recriadas a cada nova chamada.
 */

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

const valor = 'Global'

function testeClosure() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    testeClosure()
}

exec()  // irá imprimir 'Local' ou 'Global'?
// a função irá carregar o contexto léxico de onde ela foi definida, ou seja,
// a variável mais próxima de onde ela foi definida valor, é a que esta
// com o valor 'Global'