
function printf() {
    let str=''
    for(let i in arguments) {
        str += `${arguments[i]}`
    }
    console.log(str)
}