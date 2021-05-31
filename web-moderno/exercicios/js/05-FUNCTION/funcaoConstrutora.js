function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0
    this.cor = 'Azul'   // atrib público

    // metodo publico (o this é responsável por deixar público)
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

    // metodo privado
    let metodoPrivado() {
        console.log('Este método é privado!')
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
console.log(uno.cor)

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)


function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,4))
console.log(area(5, 5)) // retorna undefined