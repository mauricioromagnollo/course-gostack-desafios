const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais == 'China'
const mulheres = f => f.genero == 'F'
const menorSalario = (f, fAtual) => {
    return f.salario <= fAtual.salario ? f : fAtual
}

const salarioMenorTresMil = f => f.salario < 3000
const funcionarioDaIndonesia = f => f.pais = 'Indonesia'

axios.get(url).then(response => {
    const funcionarios = response.data

    const chinesaMenorSalario = funcionarios
                                    .filter(chineses)
                                    .filter(mulheres)
                                    .reduce(menorSalario)

    const daIndonesia = funcionarios.filter(funcionarioDaIndonesia)
    
    console.log(chinesaMenorSalario)

})


