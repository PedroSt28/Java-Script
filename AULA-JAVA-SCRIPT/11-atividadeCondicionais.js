const nota1 = 6
const nota2 = 6

const mediaNotas = (nota1 + nota2) / 2

console.log(`Sua média finel é ${mediaNotas.toFixed(2)}`)

if(mediaNotas === 10){
    console.log('Aprovado com distinção')
} else if (mediaNotas < 10 && mediaNotas >= 6){
    console.log('Aprovado')
} else if(mediaNotas > 6 && mediaNotas >= 0 ){
    console.log(`Reprovado`)
} else{
    console.log('Notas invalidas')
}