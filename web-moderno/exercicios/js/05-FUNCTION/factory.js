/**
 * Funções Factory são funções que retornam um objeto.
 */

const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 123
}

// Isso é uma factory símples, função que retorna um objeto/Instância
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

function produto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1,
        precoComDesconto() {
            return (this.preco - (this.preco * this.desconto))
        }
    }
}

console.log(produto('Coca', 3.50))
// { nome: 'Coca',preco: 3.5, desconto: 0.1, precoComDesconto: [Function: precoComDesconto] }

const guarana = produto('Guarana',5)
console.log(guarana.precoComDesconto())
// 4.5