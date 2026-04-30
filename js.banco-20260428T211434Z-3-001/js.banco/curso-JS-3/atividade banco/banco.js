// const escolha = prompt("digite 1 para depositar, 2 para sacar ou 3 para sair")


// // let sair = prompt('deseja sair?')

// while (true) {
//     if (escolha == 1 || escolha == 2 || escolha == 3) {

//         if (escolha == 1) {
//             let deposito =  prompt('deseja depositar qual valor?')

//             if (depositar >= 1) {
//         alert('saldo depositado')
                
//     }else if(depositar <= 0 ){
//         alert('quantia invalida')
//     }
            
//         }else if (escolha == 2) {
//             let sacar = 'R$'+ prompt('deseja sacar qual valor? ')
//             if (sacar >=1) {
//                 alert('dinheiro ira ser direcionado a voce')
//             }else{
                
//             }
//         }

        
//     } else{
//         alert('numero invalido')
//     }

    
    
// }



    let saldo = 0

while (true) {
    const escolha = prompt("digite 1 para depositar, 2 para sacar ou 3 para sair")
    if (escolha == 1 || escolha == 2 || escolha == 3) {

        if (escolha == 1) {
            let deposito =  parseFloat(prompt('deseja depositar qual valor?'))
           

            if (deposito >= 1) {
                  saldo += deposito
            
                 alert(`Saldo depositado!, agora voce possui ${saldo}`)
                break
                
    }else {
        alert('quantia invalida')
    }
            
        }else if (escolha == 2) {
            let sacar =  parseFloat(prompt('deseja sacar qual valor? '))
            if (sacar >=1) {
                saldo -= sacar
                alert(`Dinheiro retirado da conta!, agora voce possui ${saldo}`)
                break
            }else{
                alert('quantia insuficiente para saque')
            }
        } else{
            alert('saindo de sua conta :)')
            break
        }
        
    } else if(escolha == " " || escolha != 1 || escolha != 2 || escolha != 3 ){
        alert('nao temos procedimento para esse valor :(')
    }
    
 }