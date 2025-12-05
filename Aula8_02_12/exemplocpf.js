const {validaCPF} = require("./marcius");
const input = require ("../input");

(async ()=>{
    console.log("Digite seu cpf:")
    let cpf = await input();

    if(validaCPF(cpf)){
        console.log("CPF valido")
    }else{
        console.log("CPF inválido")
    }
})()