// function decomposicao(valor){
//     const num = valor.toString().split("")

//     return {
//         centena: Number(num[0]),
//         dezena: Number(num[1]),
//         unidade: Number(num[2])
//     }
// }

// console.log(decomposicao(789))

function decomposicao(valor){
    const centena = parseInt(valor / 100).toFixed(0)
    const dezena = parseInt(valor %100 / 10).toFixed(0)
    const unidade = parseInt(valor % 10)
    console.log(`${centena} - centenas  ${dezena} - dezenas  ${unidade} - unidade`)
}

console.log(decomposicao(789))
console.log(decomposicao(965))
console.log(decomposicao(251))
console.log(decomposicao(852))




//exemplos de mais funções ultilizadas em conunto

const ALIQUOTA_IMCS = .1
const ALIQUOTA_IPi = .05
const valorBase = 0



//calculando indices
function calcularImcs(valorBase){
    return valorBase * ALIQUOTA_IMCS
}

function calcularIpi(valorBase){
    return valorBase * ALIQUOTA_IPi
}



//calculando produtos

function calcularValorProduto(valorBase){
    const icms = calcularImcs(valorBase)
    return valorBase - icms
}

function calcularProdutoImportado(valorBase){
    const icms = calcularImcs(valorBase)
    const ipi = calcularIpi(valorBase)
    return valorBase - icms -ipi
}

console.log(calcularValorProduto(135))
console.log(calcularProdutoImportado(135))