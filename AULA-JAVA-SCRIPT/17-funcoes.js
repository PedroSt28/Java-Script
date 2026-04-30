/*Funções

Ultilização: em praticamente todos os codigos do projeto

Cantagens: 
- Abstração
- Orgsnização
- Reaproveitamento de codigo
- Testes
- Documentação

Uma função deve:(baseado na minha opnao e codigo limpo):
- Ter nome totalmente auto-descritivo
- Ter de 0 a tres paraetros no maximo
- Ser mais simples possivel 
- deve ser especializada em apenas uma coisa

Palavras Novas:

- function
- return
- undefined

Sintaxe:

function nome(){
    bloco de função
}
*/

//Hoisting chamar antes de declarar a função
primeiraFuncao()

//Declaração
function primeiraFuncao(){
    console.log('Minha primeira função')
}


//function call
primeiraFuncao()

console.log(primeiraFuncao)

//Parametros
function comprimentarAluno(nome){
    console.log(`boa noite, ${nome}`)
}

comprimentarAluno('João')
comprimentarAluno('Marina')
comprimentarAluno('Ana')

function soma(a, b){
    console.log( a + b )
}

soma(10, 10)
soma(20, 10)
soma(30, 10)

function mediaNotas(a, b){
    const somaNotas = soma(a + b)
    console.log(somaNotas)
}

soma(10, 10)
soma(20, 10)
soma(30, 10)


//Efeito x retorno



debugger
function soma(a, b){
    return a + b
}

console.log(soma(10, 10))
console.log(soma(20, 10))
console.log(soma(30, 10))

function mediaNotas(a, b){
    const somaNotas = soma(a , b)
    return somaNotas / 2
}

console.log(mediaNotas(10, 10))
console.log(mediaNotas(6, 7))
console.log(mediaNotas(3, 7))

function gerarEmail(nome, sobrenome){
    nome = nome.toLowerCase()
    sobrenome = sobrenome.toLowerCase()
    const email = `${nome}.${sobrenome}@senai.com`
    return email
}

console.log(gerarEmail("Pedro", "Straciere"))
console.log(gerarEmail("Dudu", "Betinha"))
console.log(gerarEmail("Sabrina", "Silva"))

const emailMaria = gerarEmail("Maria", "Souza")

console.log(emailMaria)

function enviarEmailMaria(){
    console.log('enviar email para', emailMaria)
}

enviarEmailMaria()