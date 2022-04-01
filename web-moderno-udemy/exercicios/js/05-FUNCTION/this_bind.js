/**
 * 
 */

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // undefined conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)   
falarDePessoa()

function Pessoa() {
    this.idade = 0

    const self = this   // cravar o this, lembrando que o this em JS varia
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000) // 1000 ms = 1 seg
}

new Pessoa
