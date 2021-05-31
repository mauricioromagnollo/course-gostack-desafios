const nums = [1,2,3,4,5,6,7,8,9,10]

console.log('**********break*********')
for(x in nums) {
    if(x == 5) break    // irá desviar o fluxo para fora do for, ou seja, parar
    console.log(`${x} = ${nums[x]}`)
}
console.log('**********continue*********')
for(y in nums) {
    if(y == 5) continue
    console.log(`${y} = ${nums[y]}`)    
}

externo: 
for(a in nums) { // break rotulado
    for(b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}