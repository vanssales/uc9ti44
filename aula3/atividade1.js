


const input = require("../input");

(async ()=>{
    console.log("Coloque um saldo na conta ");
    let saldo = Number (await input());
   

    if(isNaN(saldo)){
        console.log("O saldo deve ser um número ")
    }else{
        console.log("Aperte um numero: ");
        let produto = Number (await input());
    
    if (isNaN(produto)){
        console.log("Deve ser um número para um produto ")
    }else if(saldo > 5 && produto == 42 ){
        console.log("Voce ganhou uma coca-cola");
    }else{
        console.log("Saindo... Vou devolver seu dinheiro !");
    }
}    
})();