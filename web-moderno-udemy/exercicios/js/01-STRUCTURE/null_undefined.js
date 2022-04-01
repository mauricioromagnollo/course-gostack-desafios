/**
 * Null e Undefined são usados para indicar ausência de valor.
 * Todas as funções, por definição, retornam undefined.
 * Exceto, claro, se ela tiver um retorno definido.
 *  
 */

function funcao(x) {
    return (x == undefined) ? true : false
}

console.log(funcao())
// true
console.log(funcao(3))
// false
console.log(null == undefined)
// true


let valor // não inicializada
console.log(valor)

valor = null    // não possui valor e endereço
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.60

console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(produto.preco)

produto.preco = null // ou defina 0 ou -1, para considerar nulo
console.log(produto.preco)
console.log(!!produto.preco)

// sEx (Referência):   
    const a = {name: 'Teste'}
    const b = a
    b.name = 'Xurenay'

    console.log(a.name) // Xurenay

// Ex (Cópia):
    const c = 3
    let d = c
    d++
    console.log(c) // 3

