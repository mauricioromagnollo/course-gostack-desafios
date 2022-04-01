function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
// 0
console.log(soma(1))
// 1
console.log(soma(2.2,3.3,1.1))
// 6.6
console.log(soma(2,3,5))
// 10
console.log(soma('string',2,3))
// 0string23