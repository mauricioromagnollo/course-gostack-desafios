
/**
 * Como trabalhar com assíncrono tornando, pelo menos aparentemente mais síncriono
 * Recurso do ES8
 * Objetivo: Simplificar o uso de Promises...
 * 
 * Importante: SEMPRE marcar uma função com: async () =>, para conseguir utilizar o await
 */

const http = require('http')

// Utilizando Promise:
const getTurma =  letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resposta => {
            let resultado = ''

            resposta.on('data', dados => { 
                resultado += dados
            })

            resposta.on('end', () => { 
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

let obterAlunos = async () => {   
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA,turmaB,turmaC)
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))