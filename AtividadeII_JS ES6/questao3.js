let progressao = {
    id: 1,
    nome: 'Demetrio',
    n: 3,
    a1: 1,
    e: 2,
}

const progressaoAritmetica = ({n, a1, e}) => {
    let termoAtual = a1
    let soma = 0
    let pa = []

    for (let i = 0; i < n; i++) {
        pa.push(termoAtual)
        soma += termoAtual
        termoAtual += e
    }
    console.log(`Progressão Aritmética: ${pa.join(', ')}`)
    console.log(`Soma: ${soma}`)
}

const progressaoGeometrica = ({ n, a1, e }) => {
    let termoAtual = a1
    let soma = 0
    let pg = []

    for (let i = 0; i < n; i++) {
        pg.push(termoAtual)
        soma += termoAtual
        termoAtual *= e
    }
    console.log(`Progressão Geométrica: ${pg.join(', ')}`)
    console.log(`Soma: ${soma}`)
};

progressaoAritmetica(progressao)
progressaoGeometrica(progressao)

