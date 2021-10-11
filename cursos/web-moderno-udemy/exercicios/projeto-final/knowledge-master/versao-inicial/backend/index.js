const portaDoServer = 3000
const app = require('express')()

app.listen(portaDoServer, () => {
  console.log('Backend executando')
})