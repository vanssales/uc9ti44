/*
    Atividade de Sistema bancário
*/

const input = require("../input");

(async ()=>{
    let saldo = 300

    console.log("😊Bem vindo ao Vanessa's Bank!");
    console.log("😀Digite 1 para depositar ou 2 para sacar:");
    let resposta = await input();
    console.log("Digite o valor: ");
    let valor = Number(await input());
    
    if (valor<1)
    {
        console.log("Digite um valor maior ou igual a 1");     

    }
    
    if(resposta == "1" && valor>=1){
        console.log(`Valor do Deposito ${valor}`)
        saldo += valor;
        console.log("Valor Total");
        console.log(`Saldo: ${saldo}`);
        
    }else{
        if(resposta == "2"){
            console.log(`Valor do Saque ${valor}`)
            saldo -= valor;
            console.log("Valor Total");
            console.log(`Saldo: ${saldo}`);
            
        }else{
            console.log("Algo deu errado ou você não apertou 1 ou 2");
        }
    }
   
})();