/**
 * 4 formas de exportar de um módulo.
 * a forma 4 está em "moduloB.js"
 */
console.log('this = ', this)
// forma 1:
this.ola = 'Cê besta!'
// forma 2:
exports.bemVindo = 'Bem vindo Xurenay!'
// forma 3:
module.exports.ateLogo = 'Valeu jhow!'