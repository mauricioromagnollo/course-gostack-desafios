# Ignite NodeJS

## O que é o Node.js?

- O Node.js foi criado pelo Ryan Dahl
- Plataforma open-source que permite a execução da linguagem javascript do lado do servidor
- V8 + libuv + conjunto de módulos

## O que o Node.js veio resolver?

- Tecnologias da época não davam um bom suporte ao processo de I/O

## Características do Node.js

- Arquitetura Event Loop
  - Call Stack
- Single Thread
- Non-blocking I/O
- Múdulos próprios (core)
  - http
  - dns
  - fs
  - buffer
  - ...

## Event Loop

...

## Gerenciadores de Pacotes

- NPM e Yarn
- Instalar bibliotecas externas
- Disponibilizar bibliotecas

## Frameworks

- Express
- Nest.js
- ...

## O que é API?

- Application Programming Interface
- Conjunto de especificações de possíveis interações entre aplicações
- Documentação para desenvolvedor

## API Rest

- Client-Server
- Stateless
- Cache
- Interface Uniforme
  - Identificação dos recursos
    - `http://endereco.com.br/products`
  - Representação dos recursos
  - Mensagens auto-descritivas
  - HATEOAS (Hypertext As The Engine Of Application State)
    ```json
      {
        "id": 1,
        "user": "x0n4d0",
        "created_at": "2020-10-10",
        "commentsLink": "api/users/1/comments"
      }
    ```
- Camadas
- Código Sob Demanda

## Métodos de Requisição

### HTTP Verbs

- GET: Leitura/Busca
- POST: Criação
- PUT: Atualização (Atualiza Todos os Dados)
- PATCH: Atualização (Atualiza Apenas um Dado Específico - Atualização Parcial)
- DELETE: Deletar um/os dado(s)

### HTTP Codes

- 1XX: Informativo - a solicitação foi aceita ou o processo continua em andamento;
- 2XX: Confirmação
  - 200 - Requisição bem sucedida
  - 201 - Created - Geralmente utilizado para algum POST para uma inserção
- 3XX: Redirecionamento
  - 301 - Moved Permanently
  - 302 - Moved
- 4XX: Erro do cliente
  - 400 - Bad Request
  - 401 - Unauthorized
  - 403 - Forbidden
  - 404 - Not Found
  - 422 - Unprocessable Entity
- 5XX: Erro no servidor - o servidor falhou ao concluir a solicitação
  - 500 - Internal Server Error
  - 502 - Bad Gateway

## Parâmetros das Requisições

- Header Params

```
authority: app.rocketseat.com.br
method: GET
path: /api/journey-nodes
scheme: https
referer: https://app.rocketseat.com.br/node/
```

- Query Params
  - http://endereco.com.br/v1/users?page=2&limit=50
    - chave: page e limit
    - valor: 2 e 50
    - separação: &

- Route Params
  - http://endereco.com.br/v1/users/{id}

- Body Params

..

## Boas Práticas API Rest

- A utilização correta dos métodos HTTP
- A atualização correta dos status no retorno das respostas
- Padrão de nomeclatura
  - Busca usuários - GET /users

## Tipos de Parâmetros do Node.js

### Route Params

Serve para identificar um recurso para editar/deletar/buscar.

```js
'http://domain.com.br/users/:id'
const { id } = request.params;
```

### Query Params

Utilizado para paginação, filtro...
Os query params, são parâmetros opcionais, ou seja, se não forem passados na rota não retornará erro.

```js
'http://domain.com.br/users?page=2&order=asc'
const { page, order } = request.query;
```

### Body Params

```js
'http://domain.com.br/users?page=2&order=asc'
const { data } = request.body;
```

### Headers

Dentro dos headers que nós passamos informações mais sensíveis, como tokens.

```js
'http://domain.com.br/users'
const { cpf } = request.headers;
```

## Middlewares

