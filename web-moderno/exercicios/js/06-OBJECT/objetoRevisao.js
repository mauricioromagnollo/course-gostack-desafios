// coleção dinâmica de pares chave/valor

// Ex01:
const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generica'   // outra forma de usar/criar atributo
produto.preco = 220
console.log(produto)
delete produto.marca
delete produto['preco']
console.log(produto)

// Ex02:
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],

    calcularValorSeguro: function() {
        //...
    }
}
console.log(carro)

console.log(carro.proprietario.endereco.numero)
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro.condutores != undefined)

console.log(carro)