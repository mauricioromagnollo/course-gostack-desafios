const BROWSER = false

/**
 * Number type
 * 
 */

if(BROWSER) {
    // Conversão necessária, pois prompt irá retornar uma string, não um número!
    let n = prompt("Enter the number: ")
    console.log(typeof n)
    // → string

    let n = Number(prompt("Enter the number: "))
    console.log(typeof n)
    // → number
}

console.log(Number.isSafeInteger('4'))
// → false
console.log(Number.isSafeInteger(Number('4')))
// → true
console.log(Number.isSafeInteger(2))
// → true
console.log(Number.isSafeInteger(2.5))
// → false
console.log(Number.isSafeInteger('str'))
// → false
console.log(isNaN(3))
// → false
console.log(isNaN(3.5))
// → false
console.log(isNaN('str'))
// → true
console.log(Number.isInteger(3))
// → true
console.log(Number.isInteger('b'))
// → false
console.log(Number.isInteger(3.4))
// → false
console.log(Number.parseInt(2.3))
// → 2
console.log(Number.parseInt(2.9))
// → 2
console.log(Number.isFinite(2))
// → true
console.log(Number.isFinite('as'))
// → false
console.log(Number.isFinite('3'))
// → false
console.log(Infinity)
// → Infinity
console.log(-Infinity)
// → -Infinity
console.log(Infinity - 1)
// → Infinity 
console.log(NaN == NaN)
// → false
console.log(NaN === NaN)
// → false
console.log(null == 0)
// → false
console.log(null === 0)
// → false
console.log(null == undefined)
// → true
console.log(null === undefined)
// → false
console.log(false == 0)
// → true
console.log(true == 1)
// → true
console.log(Number.EPSILON)
// → 2.220446049250313e-16
console.log(Number.MAX_VALUE)
// → 1.7976931348623157e+308
console.log(Number.MIN_VALUE)
// → 5e-324
console.log(Number.MAX_SAFE_INTEGER)
// → 9007199254740991
console.log(Number.MIN_SAFE_INTEGER)
// → -9007199254740991
console.log(Number.POSITIVE_INFINITY)
// → Infinity
console.log(Number.NEGATIVE_INFINITY)
// → -Infinity
console.log(Number.NaN)
// → NaN
console.log(0 / 0)
// → NaN
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN