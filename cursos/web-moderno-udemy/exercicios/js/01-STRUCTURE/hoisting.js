{
    console.log('a = ',a)   // imprimindo variavel antes de declarar?
    var a = 2               // mesmo sem declarar antes, a variável foi jogada para cima
    console.log('a = ',a)
}

// o bloco acima é o mesmo que:
{
    var b
    console.log('a = ', b)
    var b = 2
    console.log('b = ', b)
}

// como se mesmo sem declarar, a variável tivesse sido 'jogada' para cima
// esse efeito acontece com variável declarar com var

/* Com o let */
// console.log('c = ',c)
// let c = 2
// console.log('c = ',c)
// Com let isso não ocorre
