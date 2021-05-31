"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // posso omitir os parêntesis
casamento.ano = 2017;
console.log(casamento);
// Escrevendo a mesma data de outra forma
// Declarando os atributos diretamente no construtor usando public
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta; // posso omitir os parêntesis
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três parametros
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
    // tbm é public (por padrão)
    precoComDesconto() {
        return (this.preco * (1 - this.desconto));
    }
}
const hd = new Produto('HD Externo', 300);
const memoria = new Produto('Memória', 200, 0.1);
console.log(hd.resumo());
console.log(memoria.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(40).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
/** HERANÇA */
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
        // ...
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1);
/** Membros Estáticos */
/**
 * Estático => Pertence a classe e não a instância. Quando você usa a palavra
 * static, você está colocando o atributo ou método associado diretamente a classe
 * e não a cada uma das instâncias.
 */
// Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(3));
/**
 * Classe Abstrata
 *
 * Não pode ser instanciada...
 * Útil para herdar para outras classes, utilizar static...
 */
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
// Se eu tiver uma classe abstrata que herda de outra abstrata, eu não preciso implementar os métodos abstratos
class Soma extends Calculo {
    executar(...numbers) {
        this.resultado = numbers.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numbers) {
        this.resultado = numbers.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
let c2 = new Multiplicacao();
c2.executar(2, 3, 4, 5);
console.log(c2.getResultado());
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
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora());
/**
 * Atributos somente leitura
 */
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice);
//# sourceMappingURL=classes.js.map