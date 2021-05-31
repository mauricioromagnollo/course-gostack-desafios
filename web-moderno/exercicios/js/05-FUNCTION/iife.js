// A ideia é fugir do escopo global, ou seja, criando um contexto lexico
// dentro de uma única função meio que geral.
// Isso cria um módulo, assim como o Node é em cada arquivo, esse módulo
// faz com que tudo que estiver dentro seja LOCAL, e não toque a window

(function() {

    console.log('Será executado na hora!')
    console.log('Foge do escopo global')

})()