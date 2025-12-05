/*
    um programa que pergunta se a pessoa que ganhar um
    presente misterioso, se ela dizer "sim" ela
    ganha um abraço, se ela dizer não fala ela ganhou
    50 reais
*/

const input = require("../input");

(async ()=>{
    console.log("Quer ganhar um presente misterioso? [sim] ou [nao] ");
    let resposta = await input();
    
    if(resposta.toLowerCase() == "sim"){
        console.log("Ganhou um abraço! ");
    }else{
        if(resposta.toLowerCase() == "nao"){
            console.log("Ganha R$ 50,00 ");
        }else{
            console.log("Digite somente [sim] ou [nao]!");
        }
    }
})();