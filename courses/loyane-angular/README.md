<div align='justify'>

<div align='center'>

![](./banner.png)

</div>

> Repositório Open Source de estudos relacionados ao Angular.

## Índice

- [Configuração do Ambiente](#configuração-do-ambiente)
- [Angular CLI](#angular-cli)
- [Conceitos](#conceitos)
  - [Data Binding](#data-binding)
- [Referências](#referências)

<br>

## **Configuração do Ambiente**

- Instalar o [NodeJS](https://nodejs.org/en/).
- Instalar o Angular e o TypeScript de forma global:
```sh
$ npm install -g @angular/cli typescript
```
- Verificar a instalação:
```sh
$ ng version
```

- Extensão do VSCode [Angular Extension Pack](https://marketplace.visualstudio.com/items?itemName=loiane.angular-extension-pack).

## **Angular CLI**

### Criando um novo projeto:

```sh
$ ng new nome_do_projeto

# Criando um projeto com SASS
$ ng new nome_do_projeto --style=sass

# Criando um projeto com LESS
$ ng new nome_do_projeto --style=less

# Criando um projeto com Stylus
$ ng new nome_do_projeto --style=stylus
```

### Executando o projeto:

Para executar o projeto, você pode tanto utilizar o comando `ng serve`, que irá servir o browser com a sua aplicação Angular, ou você pode também utilizar/criar um script no seu package.json:

```sh
$ ng serve
```

### Criando um componente:

\* o seu componente será gerado dentro do diretório `app`.

```sh
# Você pode utilizar o comando completo:
$ ng generate component nome_do_componente

# Ou você pode utilizar o alias:
$ ng g c nome_do_componente
```

### Criando um Serviço (Service):

```sh
# Você pode utilizar o comando completo:
$ ng generate service nome_do_servico

# alias:
$ ng g s nome_do_servico
```

PS: Se você quiser criar um serviço que seja relacionado a algum componente já criado, colocando esse serviço no mesmo diretório do componente, por exemplo, você pode especificar o caminho de onde será criado o serviço:

```sh
$ ng g s nome_do_componente/nome_do_servico
```

### Executando o lint

```sh
$ ng lint
```

Você pode verificar o style guide do angular através desse [link](https://angular.io/guide/styleguide).

### Testes Unitários e Integração

Esse comando irá rodar todos os arquivos `.spec.ts` contidos no repositório, que são os testes unitários.

```sh
$ ng test
```

Esse próximo comando, irá executar os testes de integração `e2e`:

```sh
$ ng e2e
```

## **Conceitos**

### Data Binding

Data binding é uma forma de associar informações que estão no componente para o tempalte e vice-versa. Existem 4 formas de fazer o Data Binding:

#### Interpolation 

```js
# {component} -> <template>
{{ valor }}
```

#### Property Binding

```
# {component} -> <template>
[propriedade]="valor"
```

É um valor passado do componente para o template, onde se utilizam os conchetes:

```ts
// Componente
export class Componente {
  urlImagem = 'https://loremflickr.com/640/360'
}
```

```html
<!-- Template -->
<img [src]="urlImagem">
```

O [] é um sintax sugar para o `bind-src`, por exemplo:

```html
<img bind-src="urlImagem">
```

Quando não existe uma propriedade no elemento, usa-se `[attr.colspan]`.

#### Class e Style Binding

Também é uma forma de property binding, porém, no lugar de utilizar as variáveis do nosso Component, ou expressões, vamos utilizar CSS para adicionar ou remover classes do nosso elemento html.

Vamos criar um select de exemplo e adicionar a ele uma `variavelLocal` com exatamente esse nome. Essa variável, irá servir para que possamos adicionar ou remover uma classe quando algum elemento do select for selecionado, obtendo o value do nosso select:

```html
<select #variavelLocal (change)="0">
  <option value="alert-success">Sucesso</option>
  <option value="alert-info">Info</option>
  <option value="alert-warning">Alerta</option>
  <option value="alert-danger">Error</option>
</select>
```

1. Adicionando uma classe por Interpolação `Class Interpolation Binding`:

```html
<div class="alert {{ variavelLocal.value }}" role="alert">
  Texto colorido conforme valor do combobox.
</div>
```

Nesse caso, será apenas adicionado mais uma classe css após a classe alert, que será exatamente o value do nosso option. 

2. Adicionando uma classe através de propriedades `Class Property Binding`:

```html
<div class="alert" role="alert" [class.alert-success]="variavelLocal.value === 'alert-success'">Sucesso</div>
```

Nesse caso, será adicionado uma classe css se a condição for verdadeira, ou seja, se por exemplo o elemento selecionado tiver o seu valor `value` igual ao 'alert-success', então será adicionada a classe 'alert-success' nessa div. Observer que utilizamos o Property Binding, além de `class.nome-da-classe`, onde essa `nome-da-classe` será a classe adicionada.

3. Adicionando uma classe utilizando `style` e Property Binding `Class Style Binding`:

```html
<div class="alert alert-danger" role="alert" [style.display]="variavelLocal.value === 'alert-danger' ? 'block' : 'none'">
  Esse texto somente aparece em caso de erro.
</div>
```

Nesse caso, adicionamos a propriedade css diretamente através do objeto style. Note que há um if ternário, onde será `display: block` se verdadeiro ou `display: none` se falso. 

#### Event Binding

Nós conseguimos escutar algum evento que acontece no template, como um clique. E enviar esse evento para o componente executar alguma lógica.

```js
# <template> -> {component}
(evento)="handler"
```

#### Two-way Data Binding

Conseguimos manter tanto o template, quanto o componente atualizados ao mesmo tempo. Para atualizar o template e o componente ao mesmo tempo, devemos utilizar o bind de eventos + o bind de propriedades juntos. 

```js
# <template> <-> {component}
[(ngModel)]="propriedade"
```

Essa propriedade ngModel é uma representação de uma entidade. Essa entidade pode ser tanto um atributo símples, quanto um objeto.

#### Input Properties

Podemos definir propriedades para os nossos componentes utilizando o decorator `@Input()`.

```js
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  @Input() nome: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
```

Agora, o nosso componente `<app-curso></app-curso>` possui uma propriedade `nome`.

```html
<app-curso [nome]="nomeDoCurso"></app-curso>
```

Nós podemos também, utilizar o parâmetro do decorator `@Input()` para definir qual será o nome dessa propriedade que será atribuido a variável do componente. Por exemplo:

```js
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso: string = '';
  
  ...
```

Terá o mesmo funcionamento do primeiro exemplo. A nossa variável no componente chama-se nomeCurso e no template se chama nome.

A nível de curiosidade, é possível também definir essa variável que será exposta no template como propriedade de outra forma, utilizando o metadado inputs do decorator do componente:

```js
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // Utilizando essa propriedade inputs
  inputs: ['outraVariavel:nome']
})
export class InputPropertyComponent implements OnInit {

  // @Input() nome: string = '';
  outraVariavel: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}

#### Output Properties

Podemos emitir um evento toda vez que algo mudar no componente, para isso, vamos utilizar o EventEmitter do Angular. Ao contrário do decorator `@Input()`, dessa vez vamos utilizar o @Output() para expor um valor/evento.

```js
	@Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
```

Todas as vezes que a função incrementa ou decrementa for executada, nós vamos emitir um evento `emit`, para que algum componente pai possa escutar. Como parâmetro do emit, podemos passar o que quiser, desde uma string até um objeto complexo.

Assim como no Input, podemos utilizar o metadado do decorator chamado outputs.

```js
@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // Utilizando esse metadado
  outputs: ['variavel']
})
```

### Ciclo de Vida do Componente (Life-Cycle)

#### OnInit / ngOnInit()

O método ngOnInit() é chamado quando o nosso componente é inicializado. Nele é onde vamos realizar nossa chamada a API para buscar os dados a serem exibidos no nosso componente.


Quando tempos input-property podemos utilizar o ngOnChanges no lugar do ngOnInit, pois se muda o input-property somente o ngOnChanges é disparado na mudança.

- ngOnChanges => Antes #2 e quando valor property-binding é atualizado
- ngOnInit => quando Componente é inicializado
- ngDoCheck -> a cada ciclo de verificação de mudanças
- ngAfterContentInit => depois de inserir conteúdo externo na view
- ngAfterContentChecked => A cada verificação de conteúdo inserido
- ngAfterViewChecked -> a cada verificação de conteúdo / conteúdo filho
- ngOnDestroy -> antes da diretiva/componente ser destruído

### Acesso ao DOM e ao Template com ViewChild

Vamos começar criando uma variável local no nosso tempalte, lemabrando que para declarar a variável, basta utilizarmos #nomeDaVariavel no nosso elemento html.


```html
<input type="text" [value]="valor" readonly #campoInput>
```

Agora, vamos associar essa variável no nosso componente, utilizando o decorator ViewChild:

```js
export class OutputPropertyComponent implements OnInit {
	@ViewChild('campoInput') campoValorInput: ElementRef;
	...
}
```

O ViewChild recebe como parâmetro, o nome da variável a qual nós queremos associar. O tipo será um `ElementRef` e ao fazermos essa referência, temos acesso a todos os atributos, eventos... de um elemento html, inclusive o `value`.

Dessa forma, podemos alterar ou atribuir diretamente o value, por exemplo:

```js
this.campoValorInput.nativeElement.value = 200;
```

## **Referências**

### Documentações

**Angular**

- [Angular](https://angular.io/)
- [Angular CLI](https://angular.io/cli)
- [Update Angular](https://update.angular.io/)
- [Angular Blog](https://blog.angular.io/)

**Outras Documentações**

- [TypeScript](https://www.typescriptlang.org/)
- [Protractor](http://www.protractortest.org/)
- [Karma](https://karma-runner.github.io)
- [NodeJS](https://nodejs.org/en/)

### Cursos

- [Curso de Angular - loyane.training](https://loiane.training/curso/angular)
- [Udemy - Curso de Angular](https://www.udemy.com/course/formacao-angular-inicio-criando-7-projetos/)


</div>