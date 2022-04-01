/**
 * Nos permite criar um identificador único durante todo o tempo de vida
 * da nossa aplicação;
 */

const simbolo = Symbol()
console.log(simbolo.valueOf())