const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// o último "()" representa invocação da função
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log('contadorA = ', contadorA.valor,'| contadorB = ', contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log('contadorA = ', contadorC.valor, '| contadorD = ',contadorD.valor)