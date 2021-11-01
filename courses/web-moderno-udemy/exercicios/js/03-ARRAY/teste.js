const numeros = [2,3,4,14,10,11,12]

const pessoas = [
  {nome:'xonado', idade:24},
  {nome:'Robocop',idade:26}
]

const mapearNome = (pessoa) => pessoa.nome

const mapearIdade = (pessoa) => pessoa.idade
const mapearIdade = (pessoa, outra) => 1

// console.log(pessoas.map(mapearNome))
console.log(pessoas.map(mapearIdade).reduce((i, prox) => (i + prox)))