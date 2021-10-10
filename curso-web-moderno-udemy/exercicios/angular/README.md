<div align='justify'>

# Angular - Curso Web Moderno

## **O que é o Angular?**

Um framework JavaScript desenvolvido pelo Google para criação de aplicações Web SPA baseada em componentes.

## **Angular CLI**

Instalando o Angular CLI:
```sh
$ npm i -g @angular/cli
```

Criando um projeto Angular:
```sh
$ ng new meu-projeto

# Usando a versão minimal:
$ ng new meu-projeto --minimal
```

## **Árvore de Componentes**

O primeiro componente a ser renderizado é o `app.component` que referencia todos os outros componentes de uma aplicação Angular. Esse conceito de árvore de componentes é utilizado na maioria dos frameworks JavaScript.

**main.ts** &rarr; Esse é o primeiro arquivo que será chamado na aplicação Angular. Logo em seguida, será chamado o `AppModule`.

**AppModule** &rarr; Esse módulo será chamado para inicializar a aplicação, utilizando o atributo **bootstrap** que irá apontar para o **AppComponent** e, a partir disso, toda a árvore de componentes será chamada.

## **Módulo**

Os módulos do Angular permitem que certos componentes possam estar visíveis ou não para outros. Dentro de um módulo, existem basicamente 5 propriedades:

- **declarations:** Onde você vai declarar todos os componentes, diretivas e pipes que fazem parte daquele módulo. Quando você declara um componente, por exemplo, dentro do módulo, você não está dizendo que ele será visível fora do módulo. Para isso, utilizamos os exports.
- **imports:** Quando você precisa importar outros módulos. Podendo ser um módulo da sua própria aplicação, como um módulo externo também, alguma dependência.
- **exports:** Onde você vai dizer quais serão os componentes, diretivas ou pipes que serão visíveis fora do módulo.
- **providers:** Onde você vai declarar os seus Services.
- **bootstrap:** Onde definimos o componente que será carregado daquele módulo, nesse caso, o bootstrap é utilizado apenas no módulo raíz da aplicação.

</div>