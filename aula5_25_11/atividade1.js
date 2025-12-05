/*
1. Cardápio básico da lanchonete (menu simples)
Crie um programa que mostre no console o seguinte menu:
1 - X-Salada
2 - X-Burger
3 - Misto Quente
4 - Suco Natural
5 - Refrigerante
Peça ao usuário para digitar o número do item desejado.
Use um switch(menu) para:
●	Exibir: "Você escolheu X-Salada" ou o nome do item correspondente.
●	Em default, exibir: "Opção inválida, tente novamente.".

Requisitos técnicos:
●	Usar switch(menu) (igual ao seu primeiro exemplo).
●	Cada case deve exibir o nome do produto.
●	Usar default obrigatoriamente.
*/

const input = require("../input");

(async ()=>{
      
    console.log(`\n 1- X-Salada \n 2- X-Burguer \n 3- Misto Quente \n 4- Suco Natural \n 5- Refrigerante \n`);
    console.log("😊Escolha a opção:");
    let escolha = Number(await input());

switch(escolha){
    case 1:
        console.log("Você escolheu o X-Salada");
        break;
    case 2:
        console.log ("Você escolheu o X-Burguer") ;
        break;
    case 3:
        console.log("Você escolheu o Misto Quente");
        break;
    case 4:
        console.log ("Você escolheu o Suco Natural") ; 
        break; 
    case 5:
        console.log ("Você escolheu o Refrigerante") ;
        break;
    default:
        console.log ("Opção Inválida... Tente Novamente!") ;
}

})();
