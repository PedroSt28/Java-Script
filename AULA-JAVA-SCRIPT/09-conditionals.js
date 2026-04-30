/* Estruturas condicionais

Ultilização: Sempre que quisermos que o programa tome 
as proprias decisões

Palavras novas:

if - (se)
else - (senão)
else if -(senao se)

vantagens: 
-maior  controle sobre o fluxo do programa 
-programa mais inteligente 

sintaxe: 

if(condição que deve ser verdadeira){
    oque deve ser feito
}

 */


const user = 'adimim'
const password = '12345'
const auth =  user === 'adimim' && password === "12345"

if(auth){
    console.log(`Usuario ${user}, reconhecido`)
} else{
    console.log(`Usuario nao reconhecido`)
}

//contexto de estoque 

const quantidadeMinima = 1000
const codigoProduto = 'LED#10'
const quantidadeDeProduto = 15000
if(quantidadeDeProduto <  quantidadeMinima && quantidadeDeProduto > 2000){
    const quantidadeNecessaria = quantidadeMinima - quantidadeDeProduto
    console.log(`quantidade abaixo do minimo`)
    console.log(`comprar ${quantidadeNecessaria}, unidades de ${codigoProduto}`)
} else if (quantidadeDeProduto >= quantidadeMinima && quantidadeDeProduto <= 2000){
    console.log('quantidade ok')

}else if(quantidadeDeProduto > 2000){
    const quantidadeDeVenda = quantidadeDeProduto - 2000
    console.log(`produtos exedidos devemos vender ${quantidadeDeVenda}, de produtos`)
}else{
    console.log('quantidade invalida')
}