/*Arrow functions

Ultilização: sempre que precisarmos de uma função de callbeck
ou se precisarmos de uma função normal tembem, é muito importante mesmo

Vantagens: 
- função simples
- no calbeck sao anonimas portanto nao ocupam memoria 

Aplicações: 
- funções nativas 
- funções importadas 
- componentes React.js
- componentes vue.js
- testes unitarios com jest

Sintaxe:
() => 
*/

const dobrar = (n) => n *2
console.log(dobrar(2))
console.log(dobrar(3))
console.log(dobrar(4))

const numeros = [1,2,3,4,5,6,7,8,9,10]
let listaQuadrados = []
let listaPares = []
let somaNumeros = 0 

listaQuadrados = numeros.map((value, index, Array) => value **2) 
console.log(listaQuadrados)

listaPares = numeros.map((value) => {
    if(value % 2 === 0 ){
        return value
    }else{
        return value + " é impar"
    }
})

console.log(listaPares)


somaNumeros = numeros.reduce((previus, currrent, index) => previus + currrent )
console.log(somaNumeros)