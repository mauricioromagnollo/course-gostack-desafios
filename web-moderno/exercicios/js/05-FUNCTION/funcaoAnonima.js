const soma = function(x, y) { // atribuindo a uma variável soma uma função anonima
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3,4)  // como não passei a função como parametro, o valor padrão assumido será soma. operacao = soma
imprimirResultado(3, 4, soma)    // mesma coisa
imprimirResultado(3, 4, function(x, y) {
    return x - y
}) // posso passar uma função anonima diretamente
imprimirResultado(3, 4, (x,y) => x * y) // fazendo com arrow function

// outro exemplo de função anonima
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

