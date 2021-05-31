function tratarErroELancar(erro) {
    //throw new Error('Deu Erro ...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally { // executará de qualquer forma no final
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)