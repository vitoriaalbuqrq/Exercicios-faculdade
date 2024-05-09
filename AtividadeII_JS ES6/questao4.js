function colocarTodasPalavrasEmMaiusculo(array){
    return new Promise((resolve, reject) => {
        const palavrasMaiusculas = array.map(palavra => {
            if (typeof palavra === 'string') {
                return palavra.toUpperCase()
            } else {
                reject("Existe valores que não são Strings")
            }
        })
        resolve(palavrasMaiusculas)
    })
}

function invertePalavras(array){
    return new Promise((resolve, reject) => {
        const palavrasInvertidas = []
        array.forEach(palavra => {
            if (typeof palavra === 'string') {
                const palavraInvertida = palavra.split('').reverse().join('')
                palavrasInvertidas.push(palavraInvertida)

            } else {
                reject("Existe valores que não são Strings")
            }
        })
        resolve(palavrasInvertidas)
    })
    
}

colocarTodasPalavrasEmMaiusculo(["teste", "palavra","matheus", "Vitoria"])
    .then(palavrasMaiusculas => {
        console.log("Palavras em maiúsculas:", palavrasMaiusculas)
        return invertePalavras(palavrasMaiusculas)
    })
    .then(palavrasInvertidas => {
        console.log("Palavras invertidas:", palavrasInvertidas)
    })
    .catch(erro => {
        console.error("Erro:", erro)
    })


