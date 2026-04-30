/*

Strins

Ultilização: em praticamente em todos os programas

Caracteristicas: 

-Interaveis
-Sao  indexadas em 0
-Nao sao Mutaveis
-Pertencem a classe string, portanto tem atributos e metodos definidos

 */

const texto = 'Desenvolvimento em JavaScript'
console.log(texto)
console.log(typeof(texto))

//iteraveis
console.log(...texto) //sprash operator

//indexação em 0
console.log(texto[0])
console.log(texto[1])
console.log(texto[2])
console.log(texto[3])
console.log(texto[700])

//tamanho da string
console.log(texto.length)
console.log(texto[texto.length - 1 ])

//slicing
console.log(texto.slice(0 , 15))
console.log(texto.slice( 15, ))

const email = 'joao@senai.com'
const atIndex = email.indexOf('@')

console.log(email.slice(atIndex , ))

//Metodos de string
const myString = ' DeSeNvOlViMeNto Em JaVaScRiPt'
console.log(myString.toLocaleUpperCase())
console.log(myString.toLocaleLowerCase())
console.log(myString.trim())
console.log(myString.replace('Em' , 'Com'))

//metodos de validação 

const validação = email.endsWith('senai.com')
console.log(`O email ${email},  é do senai: ${validação}`)

const codigo = 'ELT#0d'
const validarProdutoEletrica = codigo.startsWith('ELT')
console.log(`O produto ${codigo}, é de eletrica: ${validarProdutoEletrica}`)

const codigoMatricula = 'TJS-01'
const varificarCurso = codigoMatricula.includes('JS')
console.log(`A matricula ${codigoMatricula} é para javascript ${varificarCurso}`)


const password = '12345'
const validarSenha = password.localeCompare('12345')
console.log(validarSenha)



//metodos ultilitarios
const palavra = 'Desenvolvimento em JavaScript'
console.log(palavra.indexOf('t'))
console.log(palavra.lastIndexOf('t'))
console.log(palavra.split(" "))

