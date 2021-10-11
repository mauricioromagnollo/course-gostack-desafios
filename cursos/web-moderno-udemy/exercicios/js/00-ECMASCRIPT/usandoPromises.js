
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

let nomes = []

// isso é chamado de "callbackhell", são várias callbacks, tornando complicado o código
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))        
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             //console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])  // vai ficar esperando as promises serem resolvidas
    .then(turmas => [].concat(...turmas))                   // concatenar tudo em um único array
    .then(alunos => alunos.map(aluno => aluno.nome))        // pegar a lista de todos os alunos e buscar somente o nome
    .then(nomes => console.log(nomes))                      // imprimindo os alunos no console
    .catch(e => console.log(e.message))
//  .then(x => console.log(x))  