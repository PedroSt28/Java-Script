/*
Ultilozação: Sempre que precisamos cirar uma formula, representar 
uma regra de negocio, etc 

São eles:
->+  soma
->-  subtração
->*  multiplicação
->/ divisão 
->% modulo
->** exponenciação
*/

console.log("soma")
 console.log(10+10)
 console.log(10+ -10)
 console.log(-10 + 10)
 console.log(-10 + -10)

 console.log("subtração")
 console.log(10 - 10)
 console.log(10 - -10)
 console.log(-10 - 10)
 console.log(-10 - -10)

 const valorBase = 100
 const alosPorcentagemDesconto = .1
 const valorDesconto = valorBase * alosPorcentagemDesconto
 const valorFinal = valorBase - valorDesconto

 console.log("Resumo de valores");
 console.log(`valor Base: R$ ${valorBase.toFixed(2)}`);
 console.log(`Percentagem de Desconto: R$ ${alosPorcentagemDesconto}`);
    console.log(`Valor de desconto: R$ ${valorDesconto.toFixed(2)}`)
    console.log(`Valor Final: R$ ${valorFinal.toFixed(2)}`)


    const a = 1
    const b = 0
    const c = 4

    const delta = b**2 -4 * a * c
    
    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)

    console.log(`As raizes dessa equação é X1 = ${x1}, e x2 = ${x2} `)


/*Exrecicio 1*/

const raio = 2
const diametro = raio * 2
const pi = 3.14
const perimetro = 2 * pi * raio
const area = pi * raio**2


console.log(`Em uma circunferencia que tem raio ${raio}, possui um diametro de ${diametro}, seu perimetro é ${perimetro}, e sua area é de ${area}  :) #duduguloso`)

/*Exercicio 2*/

const celcius = 25
const faren = celcius * 1.8 + 32
const kelvin = celcius + 273

console.log(`pode se afirmar que 25 celcius é equivalente a ${faren} farehnrite, e igual a ${kelvin} Kelvin `)

/*Exercicio 3*/

const first = 9.5
const second = 7.5
const third = 9.0
const four = 8.5
const mediaFinal = (first + second + third + four) / 4

console.log(`EDuardo conhecido como dudu é um pessimo aluno por isso andou fazendo ... coisas com o professor
    . eu duvido que ele irá passar de ano.. vamos ver sua media anual....  IMPOSSIVEl
    a sua media anual é ${mediaFinal}, é dudu voce se empenhou mesmo com o professor!!!`)