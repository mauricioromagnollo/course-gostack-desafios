// melhorias do ECS6-2015

const a = 1
const b = 2
const c = 3

const obj1 = { a:a, b:b, c:c }
const obj2 = { a,b,c }  // nova forma mais reduzida

console.log(obj1)
console.log(obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        //...
    },

    funcao2() { // nova notação do ECS6 reduzida
        //...
    }
}

console.log(obj5)