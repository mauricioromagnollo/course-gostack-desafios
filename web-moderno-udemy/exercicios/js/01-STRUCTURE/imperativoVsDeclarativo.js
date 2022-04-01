/**
 * Imperativo: Repare que o imperativo é uma coisa só, ou seja, você tem menos reuso.
 * O imperativo você ensina o passo a passo como deve ser feito.
 * O foco é como tem que ser feito, não o que tem que ser feito.
 * 
 * Declarativo: Repare que foram criadas duas funções especialistas que podem ser reutilizadas.
 * O foco é o que tem que ser feito, não importa como será feito (Não importa o detalhe de implementação!). 
 * O Declarativo tem muito mais haver com o paradigma funcional!
 */

const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 },
]

// Imperativo
let total1 = 0
for(let i=0; i<alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)