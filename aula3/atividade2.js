/*
/*
    um programa que verifica se a pessoa colocou a senha
    "senac123" ou  se ela tem a chave para abrir a porta
*/

const input = require("../input");

(async ()=>{
    console.log("Insira a senha do SENAC! ");
    let senha = await input();
    console.log("VocÊ tem a chave para abrir a porta? [Responda {sim, se tiver}] ");
    let temchave = await input();

    if(senha == "senac123" || temchave.toLowerCase() == "sim" ){
        console.log("Porta Aberta");
    }else{
        console.log("Aaah... A porta permanece fechada!");
    }
})();