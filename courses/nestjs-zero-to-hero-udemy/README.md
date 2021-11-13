# **NestJS - Zero to Hero**

# NestJS CLI

- Criando um novo projeto:
	$ nest new project-name

- Schematic:
	$ nest g module tasks
	$ nest g controller tasks --no-spec
	$ nest g service tasks


# NestJS Modules

- Cada aplicação NestJS tem no mínimo um módulo - o módulo raíz. Ele é utilizado para inicializar toda a aplicação;
- Os módulos são uma forma efetiva de organizar os componentes por recursos, por exemplo, por feature;
- É uma boa prática ter uma pasta por módulo, contendo os componentes daquele módulo;
- Os módulos são Singletons, portanto um módulo pode ser importado por vários outros módulos;
- O módulo é definido por uma notação na classe com um decorator @Module;
- O decorator provê metadados que o Nest utiliza para organizar as estruturas da aplicação;
- As propriedades do decorator @Module:
	- providers: Array de providers disponíveis para esse módulo, através de injeção de dependência;
	- controllers: Array de controllers para ser instanciado pelo módulo;
	- exports: Array de providers que será exportado para outros módulos;
	- imports: Lista de módulos necessários para esse módulo. Todos os módulos exportados por esses módulos, estarão disponíveis no seu módulo via Dependency Injection;


# NestJS Controllers

- Os controllers são definidos pelo decorator @Controller;
- O decorator aceita uma string, onde o path será manipulado pelo controller;

@Controller('/tasks')
export class TasksController {
	// ...
}

- Os "handlers" são métodos http criados através de decorators nos métodos do controller, por exemplo:

@Controller('/tasks')
export class TasksController {
	@Get()
	getAllTasks() {
		// ...
	}

	@Post()
	createTask() {
		// ...
	}
}

# NestJS Providers

- Pode ser injetado em construtores utilizando o decorator @Injectable, via Dependency Injection;
- Pode ser um "plain value", uma classe, sync/async factory, etc;
- Os providers precisam ser importado ao módulo para então ser utilizado;
- Ele pode ser exportado por um módulo, para estar disponível a outro módulo importar;

# Services

- Nem todo provider é um Service;
- Service é um conceito comum de desenvolvimento;
- Os services quando utilizam o decorator @Injectable e é provido por um modulo, isso significa que ele é um Singleton e pode ser compartilhado pela aplicação, por uma única instância;
- Os services são responsáveis pelas principais regras de negócio da aplicação;


# Depedency Injection

- Qualquer componente do NestJS pode injetar um provider utilizando o decorator @Injectable;
- Definimos as dependências no construtor da classe e o NestJS vai cuidar da injeção de dependencia e tornar a dependencia disponível;

import { TaskService } from './tasks.service;

@Controller('/tasks')
export class TasksController {
	constructor(private taskService: TaskService) {}

	@Get()
	getAllTasks() {
		return await this.taskService.getAllTasks();
	}
}


# NestJS Pipes

https://docs.nestjs.com/pipes

- Os pipes operam nos argumentos do controller um pouco antes da rota ser chamada;
- Ele consegue transformar ou validar dados;
- Os pipes conseguem retornar os dados originais ou modificados;
- Os pipes conseguem lançar excessões;
- Os pipes podem ser assíncronos;

# Custom Pipe Implementation

- As classes de pipes precisam ser decoradas com @Injectable();
- Os pipes customizados precisam implementar a interface PipeTransform. Então, todo pipe precisa implementar o método transform(). Esse methodo será chamado pelo NestJS para processar os argumentos.
- O metodo transform() aceita dois parâmetros:
	value: o valor do argumento que será processado;
	metadata (opitional): um objeto contendo metadados relacionados ao argumento;

# Handler-level pipes

- São definidos pelo decorator @UsePipes();
- Será aplicado a todos os parâmetros da request;

@Post()
@UsePipes(SomePipe)
createTask(
	@Body('description') description
) {
	// ...
}

# Parameter-level pipes

- Será aplicado apenas ao parâmetro em que ele foi definido;

@Post()
createTask(
	@Body('description', SomePipe) description
) { .. }

# Global pipes

- É aplicado ao nível da aplicação e será aplicado em todas as requests;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(SomePipe);
  await app.listen(3000);
}
bootstrap();



# Class Validator

https://github.com/typestack/class-validator


# Docker

$ docker run --name postgres-task-management -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres

-------------------------
# JWT (JSON WEB TOKEN)
-------------------------

LKASjdç1lçjwklaksdjalksdj.dlaksdjalskdjalkdjslkajdlkasjdalkfjç.lasjkdalksdjlçasdkja

O token é dividio em 3 partes, seaparadas por '.'. São elas:

Header -> Guarda os metadados relacionados ao token (tipo, o algoritmo de hash utilizado...);

Payload -> Contem informações relacionadas ao dado, ex: (dados do usuário, quando foi criado o token, quando será expirado);

Signature -> É o resultado da criptografia do Header junto com a do Payload.


Exemplo:

Payload

{
	"username": "John Doe",
	"role": "admin",
	"iat": 1532165135, // quando foi criado o token
	"exp": 1532135452  // quando o token irá expirar
}

Para validar o Token, nós pegamos o Header e o Payload e geramos um novo hash. Assim, comparamos a Signature com o nosso novo hash gerado.

- Os tokens devem ter um tempo de expiração, e precisamos gerar um novo Token. Essa é uma medida de segurança.


# Logs

Log - Log de propósito geral;
Warning - Problema não tratado mas que não é fatal ou destrutivo;
Error - Problema fatal ou destrutivo
Debug - Informação utilizada para nos ajudar a debugar a logica em casso de erro/warning;
Verbose - Informação que provê insights sobre o comportamento da aplicação.

Os Logs precisam ser separados por ambientes. Por exemplo, em produção, você não quer que tenha muitos logs. Veja uma tabela de exemplo:

dev (Log, Error, Warning, Debug e Verbose)
homolog (Log, Error e Warning)
prod (Log e Error)


# Heroku

$ yarn global add heroku
$ heroku login
$ heroku addons:create heroku-postgresql:hobby-dev -a todo-libre-api-homolog
$ heroku git:remote -a todo-libre-api-homolog
$ heroku config:set NPM_CONFIG_PRODUCTION=false
$ heroku config:set NODE_ENV=production
$ heroku config:set STAGE=homolog

... adicionar usando o comando config:set todas as variáveis do .env;

$ git push -f heroku HEAD:master





