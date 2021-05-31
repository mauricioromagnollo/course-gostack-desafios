{
    var a = 2
    let b = 3
}

console.log(a)
// 2

//  console.log(b)
//  ReferenceError: b is not defined

/**
 * Template String:
 */
const produto = 'iPad'
console.log(`${produto} é caro!`)
// iPad é caro!

// Destructuring e Operador Rest "..."
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)
// C o [ 'd', '3', 'r' ]

const [x, y] = [1, 2, 3]
console.log(x, y)
// 1 2

// retirando de um objeto "destructuring" com o mesmo nome e setando uma variavel
const { idade: i, nome } = { nome: 'Ana', idade: 9}
console.log(i, nome)
// 9 'Ana'