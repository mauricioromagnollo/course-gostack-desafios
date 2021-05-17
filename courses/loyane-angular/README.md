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

```sh
# Criando o projeto
$ ng new nome_do_projeto

# Executando o projeto
$ ng serve

# Criando um componente
$ ng g component nome_do_componente

# Criando um módulo
$ ng g module nome_do_modulo

# Criando um service
$ ng g service nome_do_service
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

#### Input/Output Properties

...

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