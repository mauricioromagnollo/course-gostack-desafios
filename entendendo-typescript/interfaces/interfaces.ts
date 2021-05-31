interface Humano {
  nome: string,
  idade?: number,  // ?: atributo opcional
  [prop: string]: any, // atributo com nome e tipo dinâmico na interface
  // Esse atributo dinâmico pode ser definido qualquer nome e qualquer tipo
  saudar(sobrenome: string): void // declarando um método na interface
  // saudar?(sobrenome: string): void // A função também pode ser opcional
    // inserindo a interrrogação logo após o nome da função
}

function saudarComOla(pessoa: Humano) {
  console.log('Olá, ' + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Joana';
}

const pessoa = {
  nome: 'João',
  idade: 27,
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
  }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
pessoa.saudar('Skywalker')


class Cliente implements Humano {
  public nome: string = ''
  public ultimaCompra: Date = new Date
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
  }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra)
