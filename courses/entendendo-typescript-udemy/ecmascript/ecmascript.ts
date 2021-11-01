// let & const

// console.log(seraQuePode)
// var seraQuePode = '?' // hoisting

let estaFrio = true;
if (estaFrio) {
  // var acao = 'Colocar o casaco!'
  let acao = 'Colocar o casaco!'
  console.log(acao)
}
// console.log(acao)

const cpf: string = '123.456.000-99';
// cpf = '121231213131'
console.log(cpf)

var segredo = 'externo';
function revelar() {
  var segredo = 'interno';
  console.log(segredo)
}
revelar();
console.log(segredo);

// Arrow Function

// Sintaxe reduzida e como a função arrow trata o this
const somar = function(n1: number, n2: number): number {
  return n1 + n2
}

console.log(somar(2,2))

// Funciona sem colocar a saída como number
// const subtrair = (n1: number, n2: number) => n1 - n2
const subtrair = (n1: number, n2: number): number => n1 - n2
console.log(subtrair(2, 3))

const saudacao = () => console.log('olá')
saudacao()

const falarCom = (pessoa: string) => console.log(`Olá ${pessoa}`)

// this
/*
function normalComThis() {
  console.log(this)
}

// o parâmetro do bind será enviado para o this
const normalComThisEspecial = normalComThis.bind(2)

normalComThis() // undefined
normalComThisEspecial() // 2

const arrowComThis = () => console.log(this)
arrowComThis() // window (no Browser)

// Para descobrir qual é o this em uma função arrow,
// basta descobrir qual é o this que está no contexto em que a função foi escrita

// O local que a função foi definida, é o this que ela irá utilizar e nunca vai mudar

*/

// Parâmetro padrão

function contagemRegressiva(inicio: number = 0): void {
  console.log(inicio)
  while (inicio > 0) {
    inicio--
    console.log(inicio)
  }
  console.log('Fim')
}

contagemRegressiva()
contagemRegressiva(5)

// É possível utilizar um parâmetro baseado no primeiro

/*
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
  console.log(inicio)
  while (inicio > 0) {
    inicio--
    console.log(inicio)
  }
  console.log('Fim')
}
*/



// Rest & Spread

// Spread
const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers)) // 99

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaAMais: string[] = ['Carlos', 'Marcos', 'Ana', ...turmaA]
console.log(turmaAMais) // ['Carlos', 'Marcos', 'Ana', 'João', 'Maria', 'Fernanda']

// Rest
function retornarArray(...args: number[]): number[] {
  return args
}

const numeros = retornarArray(1,2,3,4,5,6)
console.log(numeros)
console.log(retornarArray(...numbers))


// Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean) {
  console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
  console.log(Array.isArray(params))
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)


// Destructuring (array)

const caracteristicas = ['Motor Zetec 1.8', 2020]
const [ motor, ano ] = caracteristicas;
console.log(motor)
console.log(ano)

const [w, z] = [2, 3]
console.log(w) // 2
console.log(z) // 3

// Destructuring (objeto)
const item = {
  tipo: 'SSD 300gb',
  preco: 200,
  caracteristicas: {
    tipoProduto: 'importado'
  }
}

const { tipo, preco, caracteristicas: { tipoProduto } } = item;
console.log(tipo)
console.log(preco)
console.log(tipoProduto)

// const { tipo: t, preco: p } = item
// console.log(t)
// console.log(p)



// Template String

const usuarioID = 'SuporteCod3r';
const notificacoes = '9'
const boasVindas = `
  Boas vindas ${usuarioID},
  Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`
console.log(boasVindas)

console.log(`${(1+1) * 30}`)
console.log(`Motor: ${caracteristicas[0]}`)



/* DESAFIOS */

// Exercicio 1
const dobro = (valor: number = 0): number => valor * 2
console.log(dobro(10))
   
// Exercicio 2
const dizerOla = function (nome: string = 'Pessoa' ): void {
  console.log("Ola, " + nome)
}
   
dizerOla()
dizerOla("Anna")
   
// Exercicio 3
const nums = [-3, 33, 38, 5]
// Imprimir o menor valor
console.log(Math.min(...nums))
   
// Exercicio 4
const array = [55, 20]
// Adicionar todos os elementos de "nums" em array
array.push(...nums)
console.log(array)
   
// Exercicio 5
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas;
console.log(`${nota1}, ${nota2}, ${nota3}`)

// Exercicio 6
const cientista = {primeiroNome: "Will", experiencia: 12}
const {primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)



// Promises

/**
 * Uma das formas para trabalhar como assincronismo;
 * 
 * 
 
 function esperar3sPromise() {
   return new Promise((resolve: any) => {
     setTimeout(() => {
       resolve('3s depois promise...')
      }, 3000)
  })
}

esperar3sPromise()
.then(dado => console.log(dado))

*/

fetch('https://swapi.co/api/people/1')
  .then(res => res.json())
  .then(personagem => personagem.films)
  .then(films => fetch(films[0]))
  .then(resFilm => resFilm.json())
  .then(filme => console.log(filme.title))
  .catch(err => console.log(err))
