/*
# Padrão "Chain of Responsability" ou "Middleware":
    (Cadeia de Responsabilidade)

- Processo A (1 Função):
    - Passo A
    - Passo B
    - Passo C
    
    * Digamos que passo A, B e C não são funções e não podem ser reutilizados.
    * Fazendo com que esses passos sejam reutilizados, escrevendo de outra forma:


Passo A       ->  Passo B       -> Passo C
    passoB()        passoC()

    * Porém, ainda há uma dependência.

- O padrão Chain of Responsability, não existe acoplamento/dependência entre as funções.
*/

// middleware pattern (chain of responsability)

const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && 
            middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)
console.log(contexto)