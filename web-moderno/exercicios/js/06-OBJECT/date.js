/**
 * Objeto de JavaScript (Date)
 */

const data = new Date
console.log(data)
console.log('const data = new Date')
console.log('   .toLocaleDateString() = ', data.toLocaleDateString())
console.log('   .toLocaleString() = ',data.toLocaleString())
console.log('   .toLocaleTimeString() = ',data.toLocaleTimeString())
console.log('   .toString() = ', data.toString())
console.log('   .toUTCString() = ', data.toUTCString())

// utilizando template string:
console.log('Template String: ',`${data.getHours()}:${data.getMinutes()}`)
