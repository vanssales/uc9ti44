/*7. Montagem de combo (switch + “fallthrough” opcional)
Crie um programa que pergunte ao usuário qual combo ele quer:
1 - Só lanche
2 - Lanche + batata
3 - Lanche + batata + refrigerante
Ao final, exiba:
"Você escolheu: <descricaoCombo>".*/

const input = require("../input");

let descricaoCombo1 = "Só lanche";
let descricaoCombo2 = "Lanche + batata";
let descricaoCombo3 = "Lanche + batata + refrigerante";

(async ()=>{
         
    console.log(`\n 1: Só lanche\n 2: Lanche + batata \n 3: Lanche + batata + refrigerante\n`);
    console.log("😊Escolha a opção:");
    let tamanho = await input();
    

switch(tamanho.toUpperCase()){
    case '1':
        console.log(`Você escolheu: ${descricaoCombo1}`);
        break;
    case '2':
        console.log(`Você escolheu: ${descricaoCombo2}`);
        break;
    case '3':
        console.log(`Você escolheu: ${descricaoCombo3}`);
        break;
    default:
        console.log ("Opção inválida... Peça um combo válido!") ;
}

})();