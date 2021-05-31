// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.33, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// pode ser modificado, só não pode adicionar atributos, somente deletar

// Object.seal
    // Não aconsegue adicionar nem excluir atribs, somente modificar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze
Object.freeze(pessoa)
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 65
console.log(pessoa)
