/*
2. Cálculo de valor do pedido pelo código do produto
Crie um programa que tenha a seguinte tabela de preços:
100 - X-Salada (R$ 12.00)
101 - X-Burger (R$ 10.00)
102 - Cachorro-Quente (R$ 8.50)
103 - Suco (R$ 6.00)
104 - Refrigerante (R$ 5.00)
Peça:
1.	Código do produto
2.	Quantidade
Use switch(codigo) para:
○	Definir o preço unitário.
○	Calcular total = preço * quantidade.
○	Exibir "Você pediu X unidades de <produto>, total R$ <valor>".
Caso o código não exista, o default deve exibir: "Código inválido.".
________________________________________
*/


const input = require("../input");

(async ()=>{
     
    console.log(`\n 100- X-Salada (R$ 12,00) \n 101- X-Burguer (R$ 10.00) \n 102- Cachorro Quente (R$ 8.50) \n 103- Suco (R$ 6.00) \n 104- Refrigerante (R$ 5.00) \n`);
    console.log("😊Escolha o código do produto:");
    let codigoprod = Number(await input());
    console.log("😊Escolha a quantidade:");
    let quantidade = Number(await input());

switch(codigoprod){
    case 100:
        console.log("Você escolheu o X-Salada");
        console.log("O preço unitário é R$ 12,00");
        console.log("O valor total é: ", 12.0 * quantidade);
        break;
    case 101:
        console.log ("Você escolheu o X-Burguer") ;
        console.log("O preço unitário é R$ 10,00");
        console.log("O valor total é: ", 10.0 * quantidade);
        break;
    case 102:
        console.log("Você escolheu o Cachorro Quente");
        console.log("O preço unitário é R$ 8,50");
        console.log("O valor total é: ", 8.50 * quantidade);
        break;
    case 103:
        console.log ("Você escolheu o Suco") ; 
        console.log("O preço unitário é R$ 6,00");
        console.log("O valor total é: ", 6.0 * quantidade);
        break; 
    case 104:
        console.log ("Você escolheu o Refrigerante") ;
        console.log("O preço unitário é R$ 5,00");
        console.log("O valor total é: ", 5.0 * quantidade);
        break;
    default:
        console.log ("Opção Inválida... Tente Novamente!") ;
}

})();
