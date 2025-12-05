/*4. Desconto por valor da compra (switch(true) com faixas)
Crie um programa que peça o valor total da compra (totalCompra).
1.	Se totalCompra >= 100: "Desconto de 20% aplicado."
2.	Se totalCompra >= 50 && totalCompra < 100: "Desconto de 10% aplicado."
3.	Se totalCompra >= 20 && totalCompra < 50: "Desconto de 5% aplicado."
4.	default: "Sem desconto, valor muito baixo."
5.	Mostre o valor final já com o desconto aplicado.*/

const input = require("../input");

(async ()=>{
       
    console.log(`\n Qual o valor total da compra (totalCompra)? \n`);
    let valortotal = Number(await input());
    

switch(true){
    case valortotal >= 100:
        console.log("Desconto de 20% aplicado.");
        valorfinal = valortotal*0.8;
        break;
    case valortotal >= 50 && valortotal < 100:
        console.log ("Desconto de 10% aplicado") ;
        valorfinal = valortotal*0.9;
        break;
    case valortotal >= 20 && valortotal < 50:
        console.log("Desconto de 5% aplicado");
        valorfinal = valortotal*0.95;
        break;
    default:
        console.log ("Sem desconto, valor muito baixo") ;
}

console.log (`Valor final é igual a ${valorfinal}`) ;

})();