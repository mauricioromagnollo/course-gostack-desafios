// string
let nome = 'João';
console.log(nome);

// number
let idade = 25;
console.log(idade);
idade = 29.5;
console.log(idade);

// boolean
let possuiHobbies = false;
console.log(possuiHobbies);

// Tipos Explícitos
let minhaIdade;
minhaIdade = 29;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 28';
console.log(typeof minhaIdade);

// Se você inicializa uma variável e não define o tipo
// ou não faz nenhuma inferência de tipo a ela, automaticamente
// essa variável se torna do tipo any. Podendo receber qualquer valor;

// O certo é inserir os tipos quando quiser definir:
let age: number;
let isReal: boolean;
let herName: string;


// Array
let hobbies = ['Cozinhar', 'Programar'];
console.log(hobbies)
console.log(typeof hobbies)

// hobbies por inferência é um array de string;

let qualquer: any[];
// No casso desse array qualquer, ele poderá
// receber qualquer tipo, desde que seja um array.

// let pessoas: string[];


// Tuplas
let endereco: [string, number, string] = ["Av. Principal", 99, 'Bloco A'];

endereco.push('Rua Importante', 256, 'A')
console.log(endereco)

let valueKey: [string, number] = ["x", 22];
valueKey.push('Xs', 20);

console.log(valueKey);


// Enum
enum Cor {
  Cinza, // 0 
  Verde, // 1
  Rosa = 100, // 100
  Azul,   // 101
  Amarelo = 4, // 4
  Preto // 5
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

enum Meses {
  Janeiro, // 0 
  Fevereiro, // 1
  Marco, // 2
  Abril  // 3
}

console.log(Meses)


// Any

let carro: any = 'BMW';
console.log(carro);

carro = { marca: 'BMW', ano: 2019 };
console.log(carro)

// Funções

function retornaMeuNome(): string {
  return nome;
}

console.log(retornaMeuNome());

function ola(): void {
  console.log('oi');
}

ola();

function multiplicar(a: number, b: number): number {
  return a * b;
}

// Tipo função para variável
// Definindo que uma variável receberá uma função
let calculo: (n: number, m: number) => number
calculo = multiplicar;
console.log(calculo(5,6));


// objetos
let usuario: { nome: string, idade: number }  = {
  nome: 'João',
  idade: 27
}

console.log(usuario)

/**
 * Os objetos serão definidos com os atributos
 * que foram descritos na tipagem, sendo obrigatório
 * utilizar os atributos com mesmo nome e tipo.
 */

// Desafio
/*

Criar um objeto funcionário com:
  - Array de strings com os nomes dos supervisores
  - Função de bater pronto que recebe a hora
  e retorna uma string
      -> Ponto normal (<= 8)
      -> Fora do horário (> 8)
      
      
      let funcionario: { 
        supervisores: string[],
        baterPonto: (horas: number) => string 
      } = {
        supervisores: ['Ana', 'Fernando'],
        baterPonto(horario: number): string {
          if (horario <= 8) {
            return 'Ponto Normal'
          } else {
            return 'Fora do Horário'
          }
        }
      }
      
      console.log(funcionario.supervisores)
      console.log(funcionario.baterPonto(8))
      console.log(funcionario.baterPonto(9))
*/
      
// Definindo um tipo Funcionário


// Alias
type Funcionario = { 
  supervisores: string[],
  baterPonto: (horas: number) => string 
}


let funcionario: Funcionario = {
  supervisores: ['Bia', 'Carlos'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto Normal'
    } else {
      return 'Fora do horário!'
    }
  }
}


// Union Types
// É possível definir dois tipos aceitáveis para uma variável;

let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`)
nota = 'A'
console.log(`Minha nota é ${nota}!`)


// Checando tipos
let valor = 30;

if (typeof valor === 'number' ) {
  console.log('É um valor number')
} else {
  console.log(typeof valor)
}


// O tipo Never

function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: 'Sabão',
  preco: 4,
  validarProduto() {
    if (!this.nome || this.nome.trim().length === 0) {
      falha('Precisa ter um nome');
    }
    if (this.preco <= 0) {
      falha('Preço inválido!');
    }
  }
}

produto.validarProduto();


// Valores opcionais com o tipo Null

let altura = 12;
// altura = null;

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null
}

const contato1: Contato = {
  nome: 'Fulano',
  tel1: '982198271893',
  tel2: null
}

console.log(contato1)

// Essa variável irá assumir o tipo any por padrão
let podeSerNulo = null;
podeSerNulo = 12
podeSerNulo = 'abc'


// Desafio

type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
      this.saldo += valor
  }
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)
