/*

# Visão Geral Sobre o NodeJS:

    - O é o que esta rodando no servidor/beckend. Todos os exercícios de fundamentos de JavaScript foram executados utilizando o node.
    - A forma de executar o node é símples:     $ node arquivo.js
    - O Node usa o mesmo interpretador de JavaScript do Browser, o V8.
    - O Node é o ambiente de execução do JavaScrip no servidor.
    - O Node é uma soma do V8 + LIBUV

    WebServers:
        - nginx (Melhor, utiliza somente uma thread)
        - apache (Utiliza uma thread para cada requisição)


# Sistema de Módulos:

    - Ver sobre padrões de projetos (Ex: Padrão Layers "Camadas")
    - Os projetos beckend e frontend possuem formas de organizaçẽos diferentes. Organizações de arquivos, pastas... por exemplo, projetos frontend, no final eles são "minificados" utilizando um conversor e compactados em poucos arquivos, independente se o projeto estiver organizado em várias pastas e arquivos. Versão minificada do código: os arquivos quando são minificados, ou seja, você usa um conversor para diminuir o seu código, remover espaços, comentários... isso faz com que o seu site possua uma resposta mais rápida. Já no beckend, não é necessário minificar e compactar o projeto, porque o código não irá pro browser, somente para o servidor.
    - Dentro do Node, cada arquivo representa um módulo e tudo o que você escreve dentro do módulo, permanece visível somente para ele.
    - Para tornar um módulo disponível para outro arquivo (importar e exportar), é possível utilizando "require".

    - Utilizando módulo de terceiros:
        * Após importar os módulos, você consegue acessar de qualquer lugar do projeto.
        $   node -v
        $   npm -v
        * NPM = Node Package Mannager
        ex: npm install react jquery angular...

        * Instalando os módulos de terceiros dentro do projeto com npm:
        $   npm i lodash

        * Essa pasta não "sobe" para o github, ela é facilmente gerada com o comando
          digitado acima, coloque no arquivo .gitignore:    node_modules

*/