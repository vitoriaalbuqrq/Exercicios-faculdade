const _ = require('lodash')

function map(arrowFunction, array) {
    return array.reduce((acc, item) => {
      acc.push(arrowFunction(item)) 
      return acc 
    }, []) 
}

function executaTeste() {
    const array = [1, 2, 3, 4, 5]
    const arrayTriplicado = map((num) => num * 3, array)
    
    if (_.isEqual(arrayTriplicado, [3, 6, 9, 12, 15])) {
        console.log('✓ Passou no teste!')
    } else {
        console.error('O teste falhou :(')
        console.error('Resultado atual:')
        console.error(arrayTriplicado)
        console.error('Resultado esperado:')
        console.error([3, 6, 9, 12, 15])
    }
}
executaTeste()