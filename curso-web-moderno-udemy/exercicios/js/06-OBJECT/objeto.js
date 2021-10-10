const prod1 = {} // objeto vazio
prod1.nome = 'Xonado' // atributos criados dinamicamente
prod1.preco = 4998.90
prod1['Desconto'] = 0.40 // criando atributos com []
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}

console.log(prod2)

const prod3 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj2: { // pode criar objeto dentro de objeto
        varDoOutroObj: 'sadjksjd'
    }
}

console.log(prod3)

/* Mais exemplos de Objetos */

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())

// Função construtora!

/*
	→ Herança:	
		- __proto__: classePai
		- Object.prototype
		- Object.setPrototypeOf(classe, classePai)
		- const filho = Object.create(pai)

		// verificar se um atributo pertence ao filho ou ao protótipo, retorna true, false
- filho.hasOwnProperty(key)

	// Evitando modificações
- Object.preventExtensions
- Object.seal	// Object.isSealed(obj)
- Object.freeze
	- Não consegue nem modificar
- 

JSON.parse()
JSON.stringify()

*/