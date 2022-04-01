/**
 * O valor "0" em JS é falso e qualquer valor diferente de zero é verdadeiro! 
 * Além de possuir o tipo de dados boolean normalmente.
 * 
 * É possível fazer condições para atribuir uma variável, por exemplo:
 * 
 *  const x = var1 || -1
 * 
 *  // caso var1 seja algum valor que retorne falso, podendo ser por exeplo: '',0,null...
 *  // será atribuido -1 na variável "x". Este método é bastante utilizado em parâmetros
 *  // de funções, para garantir algum valor para alguma variável contida na função e até
 *  // o parâmetro.
 * 
 */


let isAtivo = false
console.log(isAtivo)
// false
isAtivo = true
console.log(isAtivo)
// true

isAtivo = 1
console.log(isAtivo)
// 1
console.log(!!isAtivo)
// true
console.log(!isAtivo)
// false

isAtivo = -1
console.log(!!isAtivo)
// true
console.log(!isAtivo)
// false

console.log(!!3)
// true
console.log(!!-1)
// true
console.log(!!' ')
// true
console.log(!!'texto')
// true
console.log(!![])
// true
console.log(!!{})
// true
console.log(!!Infinity)
// true
console.log(!!(isAtivo = true))
// true
console.log(!!0)
// false
console.log(!!'')
// false
console.log(!!null)
// false
console.log(!!NaN)
// false
console.log(!!undefined)
// false
console.log(!!(isAtivo = false))
// false
console.log(!!('' || null || 0 || ' '))
// true
console.log(('' || null || 0 || 'text'))
// text

let nome = ''
console.log(nome || 'Sem Nome Ainda')
// Sem Nome Ainda