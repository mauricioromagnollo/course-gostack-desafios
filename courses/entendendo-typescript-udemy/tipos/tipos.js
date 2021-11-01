"use strict";
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
let age;
let isReal;
let herName;
// Array
let hobbies = ['Cozinhar', 'Programar'];
console.log(hobbies);
console.log(typeof hobbies);
// hobbies por inferência é um array de string;
let qualquer;
// No casso desse array qualquer, ele poderá
// receber qualquer tipo, desde que seja um array.
// let pessoas: string[];
// Tuplas
let endereco = ["Av. Principal", 99, 'Bloco A'];
endereco.push('Rua Importante', 256, 'A');
console.log(endereco);
let valueKey = ["x", 22];
valueKey.push('Xs', 20);
console.log(valueKey);
// Enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Rosa"] = 100] = "Rosa";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Preto"] = 5] = "Preto"; // 5
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
var Meses;
(function (Meses) {
    Meses[Meses["Janeiro"] = 0] = "Janeiro";
    Meses[Meses["Fevereiro"] = 1] = "Fevereiro";
    Meses[Meses["Marco"] = 2] = "Marco";
    Meses[Meses["Abril"] = 3] = "Abril"; // 3
})(Meses || (Meses = {}));
console.log(Meses);
// Any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// Funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function ola() {
    console.log('oi');
}
ola();
function multiplicar(a, b) {
    return a * b;
}
// Tipo função para variável
// Definindo que uma variável receberá uma função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
let funcionario = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
// Union Types
// É possível definir dois tipos aceitáveis para uma variável;
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = 'A';
console.log(`Minha nota é ${nota}!`);
// Checando tipos
let valor = 30;
if (typeof valor === 'number') {
    console.log('É um valor number');
}
else {
    console.log(typeof valor);
}
// O tipo Never
function falha(msg) {
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
};
produto.validarProduto();
// Valores opcionais com o tipo Null
let altura = 12;
// altura = null;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '982198271893',
    tel2: null
};
console.log(contato1);
// Essa variável irá assumir o tipo any por padrão
let podeSerNulo = null;
podeSerNulo = 12;
podeSerNulo = 'abc';
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map