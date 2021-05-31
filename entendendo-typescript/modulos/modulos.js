"use strict";
/**
 * Quando você exporta default, você não obrigatoriamente precisa ter o nome do método:
 *
 * export default function() { ... }
 *
 * Além de quando for importar, você pode colocar o nome que quiser e não precisa fazer
 * o destructuring.
 *
 * import retangulo from './retangulo'
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const retangulo_1 = __importDefault(require("./retangulo"));
// import { areaRetangulo } from './retangulo';
const circunferencia_1 = require("./circunferencia");
// import { areaCircunferencia as circ } from './circunferencia';
console.log('Módulo carregado...');
console.log(retangulo_1.default(7, 8)); //56
console.log(circunferencia_1.areaCircunferencia(2)); // 12.56
const { digaOi } = require('./novo');
console.log(digaOi('Ana'));
//# sourceMappingURL=modulos.js.map