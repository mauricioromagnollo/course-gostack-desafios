/**
 * _variavel o "_" é uma convenção que o atributo é privado
 */

const sequencia = {
    _valor: 1,
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) { // criando uma validação pro set
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
