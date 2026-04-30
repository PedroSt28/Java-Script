/*
mensagens

Ultilozacão: sempre que precisarmos criar uma mensagem ou string customizada para exibir no front-end 
ou no back-end

*tecnicas principais:
concatenaçoes de string 
JS Literals (literias javascript)
*/

//concatenação de stirng
//exemplo 0.1

let nome = "Pedro"
let sobrenome = "Straciere"
let nomeCompleto = nome + " " + sobrenome

console.log(nomeCompleto)



//exemplo 0.2

let codigProduto = "L0#WD"
let quantidadeProduto = 500
let precoProduto = 3.5

console.log(
    'Codigo: ' + codigProduto + ', Quantidade: ' + quantidadeProduto + ' unidades, Preço: R$ '+ precoProduto.toFixed(2)
);




//Literias JS
//exemplo 0.1

 nome= "Pedro" ;
 sobrenome = 'Straciere';
 nomeCompleto = `${nome} ${ sobrenome}`;
console.log(nomeCompleto);



//exemplo 0.2

 codigProduto = "L0#WD"
 quantidadeProduto = 500
 precoProduto = 3.5

console.log('');


console.log({})
