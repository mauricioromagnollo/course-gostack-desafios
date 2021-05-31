const escola = "Cod3r"
const ehosso = 'Maconha demais'

console.log(escola.charAt(4)) // retorna letra 'r'
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // retorna o valor da ASCII
console.log(escola.indexOf('3')) // fazendo o inverso
console.log(escola.indexOf('d')) // retorna o indice que se encontra
console.log(escola.substring(1)) // começando do índice 1
console.log(escola.substring(0,3)) // do zero ao 3, sem incluir o indice 3
console.log('Escola '.concat(escola).concat('!'))
console.log(`Escola "${escola}" é boa pra caralho e ${ehosso}!`)
console.log(escola.replace(3,'e')) // substitui o 3 com o 'e'
console.log(escola.replace(/\w/g,'e')) // RegExp (Para Expressão regular)

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/)) // com RegExp

console.log ('Concatenando' + 'String' + 'Usando' + 'Soma')
console.log('Qubrando\nLinha\nString')
console.log('A newline character is written like \"\\n\".')