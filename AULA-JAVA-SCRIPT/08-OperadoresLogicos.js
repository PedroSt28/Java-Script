/* Operadpres logicos 

Ultilização: Sempre que precisarmos cirar expressoes logicas mais complexas
 e condicionais refinadas.


São eles :
- && : (end -> e logicos )
- || : or -> (ou logico)
- ! : (not -> inversora logica)



 */


//tabela verdade 
console.log(false && false)
console.log(false && true)
console.log(true && false)
console.log(true && true)


//exeplo  literal
console.log(10 > 2 && 10 % 2 === 0)

//Exemplo pratico
const user =  'adimin'
const password = '12345'
const auth = user === 'adimin' && password == '12345'
if(auth == true){
    console.log(`O usuario foi autenticado: ${auth}`)
} else{
    console.log('usuario incorreto')
}


//tabela verdade or

console.log(false || false)
console.log(false || true)
console.log(true || false)
console.log(true || true)

//exemplo pratico

console.log(10 > 2 || 10 % 2 !== 0)

//exemplo pratico
const mediaNotas = 6
const frequenciaAluno = .5

const reprovadoAluno = mediaNotas < 6 || frequenciaAluno < .75
console.log(`O aluno esta reprovado: ${reprovadoAluno}`)

//tabela verdade not

console.log(!true)
console.log(!false)

//exemplo literal 
console.log(!(10 > 2 || 10 % 2 === 0))
console.log(!10 > 2 || 10 % 2 === 0)

const aprovarAluno = !reprovadoAluno
console.log(`O aluno esta reprovado: ${reprovadoAluno}`)

//exemplo pratico 
const b = false
const a = false
const situação1 = !a && !b
const situação2 = a && !b

const ligarBomba = situação1 || situação2

console.log(` Deve-see ligar a bomba : ${ligarBomba}`)