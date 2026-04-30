/*Objetos

Ultilização: sempre que quiserms representar uma entidade de forma simples
ou um objeto especifico ou uma estruturade dados organiizdos em chaves

Vantagens
- centralização de logica 
- organização de dados 
- criação de metodos

Aplicações 
- JSON (JavaScript objeto Notation)
- API´s

Caracteristicas:
- Sao iteraveis
- sao editaveis
- pertencem a classe object
- nao sao indexadas a 0
*/

const usuario ={
    
    id : 1, 
    name : 'Joao', 
    email : 'joao@Senai.com',

    //metodos 
    apresentar(){
        console.log('Oi meu nome é ', )
    }
}


//o poder das chaves


//Leitura dos dados
console.log(usuario.id)
console.log(usuario.email)
console.log(usuario.name)
console.log(usuario.apresentar)