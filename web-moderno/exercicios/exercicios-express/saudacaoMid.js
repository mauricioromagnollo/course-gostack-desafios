// Exemplo de Middleware de terceiros

function saudacao(nome) {
  return (req, res, next) => {
    console.log(`Seja bem vindo ${nome}`)
    next()
  } 
}

module.exports = saudacao