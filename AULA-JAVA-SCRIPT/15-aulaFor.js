/*Aula sobre FOR

Ultilização: sempre que precisarmos repetir uma parte do codigo 
porem de forma contada, ou seja determinarmos previamente quantas
vezes aquele bloco ira se repetir 

Palavras novas:
- for

vantagens:
-maior agilidade no desenvolvimento  
-maior controle sobre as repetições
-aplicaçoes de efeitos em varios componentes por vez 

sintaxe: 
for(let i = 0; i < 10; i++){
      bloco do for
}
 */

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// const valor = 20

// for(let i =0 ; i <= valor; i++){
//     if(i % 2 === 0){
//         console.log(`${i} é par`)
//     }else{
//                 console.log(`${i} é impar`)

//     }
// }

// const tabuada = 2


// for(let multiplicador = 0; multiplicador <= 10; multiplicador++){
//     let conta = tabuada * multiplicador
//     console.log(`${tabuada} X ${multiplicador} = ${conta}`)
// }

//somador de despesas
const quantidadeDespesas = 3
const despesas = [10, 25, 20]
let totalGasto = 0

for (let i = 0; i < quantidadeDespesas; i++) {
   totalGasto += despesas[i];
    
}

console.log(`Voce gastou um total de ${totalGasto.toFixed(2)}`)