const tecnologias = new Map()
tecnologias.set('react', { framework: false} )
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([        // [ chave, valor ] 
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))    // has(p) p está ou não contido dentro desse map
chavesVariadas.delete(123)              // excluir elemento do map (retorna true se existir e deletar, ou false se nãoe existir o item)
console.log(chavesVariadas.has(123))
console.log('Size = ', chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456,'b')
console.log(chavesVariadas)     // # 123 => 'b', porque não pode ter chaves duplicadas