console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = "...." // isso está dentro do escopo global
}

logThis()

// Ou seja, this dentro de uma função aponta para global e fora aponta para
// module.exports/exports