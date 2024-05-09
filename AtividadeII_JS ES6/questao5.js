async function colocarTodasPalavrasEmMaiusculo(array){
        const palavrasMaiusculas = array.map(palavra => {
            if (typeof palavra === 'string') {
                return palavra.toUpperCase()
            } else {
                throw new Error("Existe valores que não são Strings")
            }
        })
        return palavrasMaiusculas
    
}

async function invertePalavras(array){
        const palavrasInvertidas = []
        array.forEach(palavra => {
            if (typeof palavra === 'string') {
                const palavraInvertida = palavra.split('').reverse().join('')
                palavrasInvertidas.push(palavraInvertida)

            } else {
                throw new Error("Existe valores que não são Strings")
            }
        })
        return palavrasInvertidas
    
}

async function processarPalavras(palavras){
    try {
        const palavrasMaiusculas = await colocarTodasPalavrasEmMaiusculo(palavras)
        console.log("Palavras em maiúsculas:", palavrasMaiusculas)

        const palavrasInvertidas = await invertePalavras(palavrasMaiusculas)
        console.log("Palavras invertidas:", palavrasInvertidas)
    } catch (erro) {
        console.error("Erro:", erro.message)
    }
}

processarPalavras(["teste", "palavra","matheus", "Vitoria"])

