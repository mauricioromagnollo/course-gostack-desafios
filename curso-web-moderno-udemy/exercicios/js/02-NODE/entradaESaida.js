// pegar um parâmetro de console. $ node arquivo.js -a -f

const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // .on('data') é para receber dados do teclado
        const nome = data.toString().replace('\n', '')
    
        process.stdout.write(`Fala ${nome}!!\n`) // escrever no console
        process.exit()
    })
}