/*6. Forma de pagamento e acréscimos/descontos
Crie um programa que peça:
○	Valor da compra (valor).
○	Forma de pagamento (numérico):
1 - Dinheiro (10% de desconto)
2 - Débito (5% de desconto)
3 - Crédito (sem desconto)
4 - Pix (8% de desconto)
Use switch(formaPagamento) para:
○	Calcular o valor final com desconto (ou não).
○	Exibir a mensagem: "Forma escolhida: <nome>. Valor final: R$ <valorFinal>".
○	Em default: "Forma de pagamento inválida."*/

const input = require("../input");

(async ()=>{
     
    console.log(`\n Qual o valor da compra? \n`);
    let valorcompra = Number(await input());
    console.log("😊Escolha a forma de pagamento:");
    console.log(`Forma de pagamento e desconto \n Escolha 1 ou 2 ou 3 ou 4 \n 1-Dinheiro (10%)\n 2-Débito (5%)\n 3-Crédito (sem desconto)\n 4-Pix (8%)\n`);
    let opcao = await input();

switch(opcao){
    case "1":
        console.log("Você escolheu pagar em Dinheiro\n");
        console.log(`Forma de pagamento: Dinheiro \n Valor final: R$ ${valorcompra*0.90}\n`);
        break;
    case "2":
        console.log("Você escolheu pagar em Débito\n");
        console.log(`Forma de pagamento: Dinheiro \n Valor final: R$ ${valorcompra*0.95}\n`);
        break;
    case "3":
        console.log("Você escolheu pagar em Crédito\n");
        console.log(`Forma de pagamento: Dinheiro \n Valor final: R$ ${valorcompra}\n`);
        break;
    case "4":
        console.log("Você escolheu pagar em Pix\n");
        console.log(`Forma de pagamento: Dinheiro \n Valor final: R$ ${valorcompra*0.92}\n`);
        break;
    default:
        console.log ("Forma de pagamento inválida.!") ;
}

})();
