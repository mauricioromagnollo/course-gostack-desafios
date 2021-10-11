/**
 * Além dos módulos de terceiros, é possível também instalar módulos core,
 * ou seja, módulos que já vem com o próprio node, como o 'http'
 */

const http = require('http')
http.createServer((req, resposta) => {
    res.write('Bom Dia')
    res.end()
}).listen(8080)