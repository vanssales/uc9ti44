/*
3. Tamanho do lanche / combo (trabalhar com strings)
Crie um programa que peça o tamanho do combo: P, M ou G.
Converta a entrada para maiúsculo (ex.: tamanho.toUpperCase()).
Use switch(tamanho) para:
○	P: "Combo Pequeno escolhido (R$ 15.00)."
○	M: "Combo Médio escolhido (R$ 20.00)."
○	G: "Combo Grande escolhido (R$ 25.00)."
○	default: "Tamanho inválido."
*/

const input = require("../input");

(async ()=>{
         
    console.log(`\n P: Combo Pequeno (R$ 15.00)\n M: Combo Médio (R$ 20.00) \n G: Combo Grande (R$ 25.00) \n`);
    console.log("😊Escolha a opção:");
    let tamanho = await input();
    

switch(tamanho.toUpperCase()){
    case 'P':
        console.log("Combo Pequeno escolhido (R$ 15.00).");
        break;
    case 'M':
        console.log ("Combo Médio escolhido (R$ 20.00)") ;
        break;
    case 'G':
        console.log("Combo Grande escolhido (R$ 25.00)");
        break;
    default:
        console.log ("Opção de tamanho inválida... Peça Novamente!") ;
}

})();