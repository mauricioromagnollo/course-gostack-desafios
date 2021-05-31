/*
Operações Básicas do banco de dados (CRUDE):
    - Create
    - Read
    - Update
    - Delete
*/

const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto 
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produtoRemovido = produtos[id]
    delete produtos[id]
    return produtoRemovido
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto } // sequence() não será publico