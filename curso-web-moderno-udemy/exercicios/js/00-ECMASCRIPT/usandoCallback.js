// exemplo de como usar promise pode ser melhor que callback
// promisse é melhor para fazer composição

const http = require('http')

// sem usar promise:
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, resposta => {
        let resultado = ''
        // enquando houver dados
        resposta.on('data', dados => { 
            resultado += dados
        })

        // quando acabar de ler os dados
        resposta.on('end', () => { 
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []

// isso é chamado de "callbackhell", são várias callbacks, tornando complicado o código
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))        
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})