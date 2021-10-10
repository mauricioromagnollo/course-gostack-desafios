/**
 * Qualquer arquivo terá acesso as variáveis globais
 * Tente evitar essa estratégia e trabalhar com sistemas de módulos normal.
 */

//console.log(global)
global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema do x0n4d0'
}

/* Uma forma de manter os seus objetos globais inalterados usando freeze

global.MinhaApp = Object.freeze ({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema do x0n4d0'
})
*/