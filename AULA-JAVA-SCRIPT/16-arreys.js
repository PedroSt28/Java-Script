/*Arrays


Ultilização:  sempre que quiseros uma lista de valores,lista de numbers,
de strings, de objetos, etc

vantagens:
-Otimiza o processamento
- armazena mais dados em uma variavel 

Caracteristicas:
- Representação: [Item1, Item2, ItemN]
-Sao iteraveis
-sao inexadas em 0
-são editaveis
- pertencem a classe object
*/


const listaCoisas = ['livros', 'agentda', 'bola de futebol']

for(let i = 0; i < listaCoisas.length; i++){
    console.log(listaCoisas[i].toUpperCase())
}

 //metodos de array

 const frutas = ['Banana', 'Tomate', 'maçã', 'pera']
 
 //adicionar item a lista 
 frutas.push('cereja')
 console.log(frutas)

 //remover item da listta
 const ultimaFruta = frutas.pop()
 console.log(ultimaFruta)
 console.log(frutas)

 frutas.splice(0,1)
 console.log(frutas)


//metodos ultilitarios

console.log('encontrar a posição de um elemento', frutas.indexOf('pera'))
console.log('montar uma string', frutas.join(' -> '));
console.log('Verificando se um item esta presente em uma lista', frutas.includes('pera'));



const numero = [1, 2, 5]
let maiorValor = 0

numero.forEach((numero) => {
    if(numero > maiorValor){
        maiorValor = numero
    }
})

console.log(maiorValor)