const somaDosParesConsecutivos = (x, callback) => {
    let soma = 0
    let contador = 0
    let valorInicial = x
    
    if (x % 2 !== 0) {
        x++
    }

    while (contador < 5) {
        soma += x
        x += 2
        contador++
    }
    
    callback(valorInicial, soma)
}

const imprimirSoma = (valorInicial, soma) => {
    console.log(`Entrada: ${valorInicial} => Saída: ${soma}`)
}

somaDosParesConsecutivos(4, imprimirSoma) 

