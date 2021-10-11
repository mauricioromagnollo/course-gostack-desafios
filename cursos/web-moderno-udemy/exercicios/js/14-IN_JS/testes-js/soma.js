function soma() {
    let soma = 0
    for(let i in arguments) {
        if(!isNaN(arguments[i])) {
            soma += arguments[i]
        }         
    }
    return soma
}

// Test:

console.log(soma(2,3,"SomaNormal") == 5)
console.log(soma(10,-1) == 9)
console.log(soma(-10,-5) == -15)

const x=5.8, y=1.2
let result = soma('Soma X e Y',x,y)
console.log(result == 7)