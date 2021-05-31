class Data {
  // Público por padrão quando você não insere o modificador 'public'
  dia: number
  public mes: number
  ano: number

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4

console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // posso omitir os parêntesis

casamento.ano = 2017
console.log(casamento)


// Escrevendo a mesma data de outra forma
// Declarando os atributos diretamente no construtor usando public
class DataEsperta {
  constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {

  }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4

console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // posso omitir os parêntesis

casamentoEsperto.ano = 2017
console.log(casamentoEsperto)


// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três parametros

class Produto {
  constructor(public nome: string, public preco: number, 
    public desconto: number = 0) {
    
  }

  public resumo(): string {
    return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100}% off)`
  }

  // tbm é public (por padrão)
  precoComDesconto(): number {
    return (this.preco * (1 - this.desconto))
  }
}

const hd = new Produto('HD Externo', 300)
const memoria = new Produto('Memória', 200, 0.1)

console.log(hd.resumo())
console.log(memoria.resumo())


class Carro {
  private velocidadeAtual: number = 0

  constructor(public marca: string, public modelo: string,
    private velocidadeMaxima: number = 200) {

  }

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida = novaVelocidade >= 0 
      && novaVelocidade <= this.velocidadeMaxima
    
    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro('Ford', 'Ka', 185)

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(40).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())


/** HERANÇA */

class Ferrari extends Carro {

  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
    // ...
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
    return this.alterarVelocidade(-15);
  }  
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

// Getters & Setters

class Pessoa {

  private _idade: number = 0

  get idade(): number {
    return this._idade;
  }
  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1)


/** Membros Estáticos */

/**
 * Estático => Pertence a classe e não a instância. Quando você usa a palavra
 * static, você está colocando o atributo ou método associado diretamente a classe
 * e não a cada uma das instâncias.
 */

// Atributos e métodos estáticos

class Matematica {
  static PI: number = 3.1416

  static areaCirc(raio: number): number {
    return Matematica.PI * raio * raio
  }
}

console.log(Matematica.areaCirc(3))


/**
 * Classe Abstrata
 * 
 * Não pode ser instanciada...
 * Útil para herdar para outras classes, utilizar static...
 */

abstract class Calculo {
  protected resultado: number = 0

  // Será implementado por quem herdar a classe
  abstract executar(...numbers: number[]): void

  getResultado(): number {
    return this.resultado
  }
}

// Se eu tiver uma classe abstrata que herda de outra abstrata, eu não preciso implementar os métodos abstratos
class Soma extends Calculo {

  executar(...numbers: number[]): void  {
    this.resultado = numbers.reduce((t, a) => t + a)
  }
}

class Multiplicacao extends Calculo {

  executar(...numbers: number[]): void  {
    this.resultado = numbers.reduce((t, a) => t * a)
  }
}

let c1: Calculo = new Soma()
c1.executar(2,3,4,5)
console.log(c1.getResultado())

let c2 = new Multiplicacao()
c2.executar(2,3,4,5)
console.log(c2.getResultado())


/**
 * Construtor Privado & Singleton
 * 
 * Com o construtor privado você pode controlar como um objeto será instanciado;
 * Qual a diferença de singleton e static?
 * Singleton geralmente é utilizado quando se tem uma única instância e você quer
 * poder herdar e trabalhar com métodos e atributos de instâncias. 
 * 
 */

// Exemplo de Singleton
class Unico {
  private static instance: Unico = new Unico 
  private constructor() {}

  static getInstance() {
    return Unico.instance
  }

  agora() {
    return new Date
  }
}

console.log(Unico.getInstance().agora())


/** 
 * Atributos somente leitura 
 */

class Aviao {
  public readonly modelo: string 

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
    
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice)


