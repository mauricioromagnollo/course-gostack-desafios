// $ npm init
/* 
    https://docs.npmjs.com/misc/scripts

- Além de descrever o seu projeto, o arquivo package.json instala as dependências
necessárias pro projeto funcionar
- Utilizando o comando $ npm i --save $packageName
    - Automaticamente quando o comando é executado na mesma pasta do 
    package.json, a dependencia será descrita no json.

- É possível inserir também scripts no arquivo package.json

* Com o arquivo package.json bem configurado, basta roadar o comando na pasta
  do projeto: $ npm i   e o arquivo .json será lido, as dependências serão
  instaladas e os scripts serão executados
* Para executar os scripts criados no .json, basta rodar o comando $ npm nomeScript.
  Ex:

  "scripts": {
    "start": "nodemon",
    "updateLinux": "sudo apt-get update"
  },

  $ npm start
  $ npm updateLinux

  # No exemplo do script start, o nodemon irá procurar o arquivo que está descrito
    no atributo "main" do package.json. Por padrão esse arquivo vem com o nome
    de index.js, caso seu arquivo principal não seja, basta alterar. O "start" é
    um comando padrão, assim como o "test".

  * No caso do "dev" ou qualquer outro comando que não seja padrão do Node,
    para executar basta usar:
        $ npm run nomeScript

  * O "exit 1" contido em "test", representa um retrono de erro 1.
    Caso o código tenha execução sem problemas, 0 é retornado.


[?] Os comandos dentro de "scripts" são em bash puro ou funciona para qualquer Shell Script?

*/

