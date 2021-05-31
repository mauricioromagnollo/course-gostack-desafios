const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'

// template String usa ``
const template = `
    Olá
    ${nome}!`

const templateOutro = `Olá ${nome}!`

console.log(concatenacao,template)
console.log(templateOutro)

// expressoes com template string...
console.log(`1 + 1 = ${1 + 1}`)

// Função arrow:
const up = textoParametro => textoParametro.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)
