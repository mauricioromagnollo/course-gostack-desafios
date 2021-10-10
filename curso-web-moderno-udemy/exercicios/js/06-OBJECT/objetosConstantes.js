// pessoa aponta para um endereço qualquer
// pessoa->12343->{ ... }
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa<-456->{...}
// pessoa = { nome: 'Ana' } // essa linha dará erro, pois pessoa é uma constante

Object.freeze(pessoa)   // congelando o objeto pessoa, não é possível mexer no objeto
pessoa.nome = 'Maria'   // essa linha não irá funcionar, o último nome antes do freeze ficará intacto
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)