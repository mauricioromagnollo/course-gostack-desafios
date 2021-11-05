<div align='justify'>

# Docker

# **Seção 01 ( Introdução )**

- [Link do Repositório](https://github.com/cod3rcursos/curso-docker)
- [Link da Apostila](http://files.cod3r.com.br/apostila-docker.pdf)

<br>

# **Seção 02 ( Conceitos )**

## O Que é Docker?

  - É uma tecnologia de virtualização, porém, diferente das tradicionais;
  - É uma engine de administração de containers;
  - Utiliza os serviços do LXC (Linux Containers);
  - O docker é Open Source e foi escrito em Go;
  - Sistema de virtualização baseado em Software;
  - Host e Container compartilham o Kernel da máquina;
  - Empacota software com vários níveis de Isolamento (Ex: Quando de memória o container pode usar, quanto de rede...);

## Porque não uma VM?

O container é muito mais leve do que uma máquina virtual tradicional. Ele irá necessitar de muito menos recursos do host, terá uma velocidade muito maior de inicialização.

## O que são containers?

- É um processo segregado, utilizando o mesmo Kernel do Host;
- Sistemas de arquivos criados a partir de uma imagem;
- Um ambiente leve e portátil, no qual aplicações são executadas;
- Encapsula todos os binários e bibliotecas necessárias para execução de uma aplicação;
- Algo entre um chroot e uma VM;

## O que são imagens?

- É um modelo de sistema de arquivo somente-leitura para criar containers;
- As imagens são criadas através de um processo chamado **build**;
- São armazenadas em repositórios no Registry. O site onde contem as imagens oficiais do Docker é o https://hub.docker.com/. Você pode também adicionar imagens da sua aplicação, para facilitar ainda mais o uso;
- São compostas por uma ou mais camadas (layers);
- Uma camada representa uma ou mais mudanças no sistema de arquivo;
- Uma camada é também chamada de imagem intermediária;
- A junção dessas camadas formam a imagem;
- Apenas a última camada pode ser alterada quando o container for iniciado;
- AUFS (Advanced multi-layered filesystem) é muito usado;
- O grande objetivo dessa estratégia de dividir uma imegem em camadas é o reuso;
- É possível compor imagens a partir de camadas de outras imagens;

## Imagem vs Container

Fazendo uma analogia com orientação a objetos, a Imagem é como se fosse uma Classe e o Container é como se fosse um Objeto, instanciado a partir dessa classe. Ou seja, a Imagem é um modelo para criação de containers. Definindo como esse container deverá ser criado;

A partir de uma única imagem, você pode instanciar diversos containers.

## Arquitetura

- Docker CLI
- Docker Daemon
- Registry

CLI -> Daemon -> Registry

<br>

# **Seção 03 ( Instalação )**

## Processo de Instalação

Quando instalamos o docker no Linux, o Docker Host é o próprio Linux. Quando criamos no Windows ou no MacOS, eles precisam criar uma máquina virtual do Linux, para ser o Docker Host.

### Linux

...


### Windows

- Com a última versão do Windows 10, vá no site oficial do Docker, clique na opção Get Docker. `Caso você não tenha a última versão do Windows, busque pelo Docker Toolbox no site do Docker`.

### MacOS

- Vá em Get Docker e busque a versão para MacOS.

# **Seção 04 ( Uso Básico do Docker )**

Testando se o docker está funcionando:

```bash
docker container run hello-world
```

### O Comando ( run )

É a concatenação de 4 comandos: 
  - docker image pull ( Se ele não encontrar a imagem localmente, ele irá buscar no Registry )
  - docker container create ( Ele irá criar o container em seguida )
  - docker container start ( Depois inicializar o container )
  - docker container exec ( Executar o container no modo iterativo )

Existem 2 modos básicos de executar containers:

- Modo Daemon ( Que você executa o container e ele fica rodando em background );
- Modo Iterativo ( Serve para você entrar no container e fazer alguma verificação, teste );

### Modo Iterativo (-i)

Executando um container do debian e verificando qual a versão do bash:

```
docker container run debian bash --version
```

Verificar quais containers possuem na minha máquina:

```bash
# Verificar quais containers estão rodando
$ docker container ps

# Verificar todos os containers (inclusive os que estão "stoped")
$ docker container ps -a
```

A flag -i significa que você quer executar o container no modo iterativo. A flag -t, é para ter acesso ao terminal do container.

```bash
docker container run -it debian bash
```

Quando você executa o comando `run` ele sempre cria um novo container. Quando você não passa o nome para o container, ele cria diferentes containers iguais, caso execute o mesmo comando. Se você criar nomes, você não conseguirá criar dois containers com o mesmo nome.

A flag `--name` permite que você crie um nome para o seu container:

```bash
docker container run --name mydeb -it debian bash
```

Listar os containers que foram criados:

```bash
docker container ls -a
```

Equivale ao comando -it:

```bash
docker container start -ai
```

O container é capaz de isolar bem um ambiente, porém, é importante você saber expor a porta de um serviço para o host local, compartilhar arquivos/pastas, copiar algum conteúdo para o container... 

### Mapeando uma porta no nginx:

```bash
# 8080 -> Porta que será utilizada para acessar o serviço do container
# 80 -> Porta que será exposta do container
# PostaDoHost:PortaDoContainer
docker container run -p 8080:80 nginx
```

### Mapeando um Volume:

Vamos começar criando um diretório qualquer na nossa máquina:

```bash
$ mkdir pastaQualquer
$ cd pastaQualquer
$ mkdir html
$ cd html
$ touch index.html
```

Agora vamos iniciar o nosso container:

```bash
# Vamos mapear o diretório do host local /pastaQualquer/html
# Para o diretório do container /usr/share/nginx/html
# PastaDoHost:PastaDoContainer
$ docker container run -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html nginx
```

### Modo Daemon (-d)

```bash
$ docker container run -d --name ex-daemon-basic -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html nginx
```

### Outros Comandos Úteis

```bash
# Verificar o container que está ativo, mesmo em modo daemon
$ docker container ps
$ docker container ls

# Verificar todos os containers contidos na nossa máquina
$ docker container ps -a
$ docker container ls -a

# Iniciar um container
$ docker container start ID_OU_NOME_DO_CONTAINER

# Parar um container
$ docker container stop ID_OU_NOME_DO_CONTAINER

# Parar um container
$ docker container restart ID_OU_NOME_DO_CONTAINER

# Remover o container
$ docker container rm ID_OU_NOME_DO_CONTAINER

# Acessar os logs do container
$ docker container logs ID_OU_NOME_DO_CONTAINER

# Inspecionar o container
$ docker container inspect ID_OU_NOME_DO_CONTAINER

# Rodando um comando dentro do docker
$ docker container exec <ID_OU_NOME_DO_CONTAINER> <comando>

# Listando as imagens instaladas na máquina local
$ docker image ls

# Listando os volumes na máquina local
$ docker volume ls

# Removendo uma imagem
$ docker image rm <ID_OU_NOME_DO_CONTAINER>
```

## Seção 05 ( Deixando de Ser Apenas um Usuário )

...

</div>