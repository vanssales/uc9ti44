const input = require("../input");

(async () => {

    var agenda = []; // declarando um vetor
    let i = 0;
    let continuar = "sim";

    do {
        console.log("Insira o nome")
        nome = await input();
        
        console.log("Insira o numero!")
        telefone = await input();

        agenda[i] = {
            nome,
            telefone
        }

        agenda.push(nome);
        agenda.push(telefone);
        i=i+1;

        console.log("Deseja continuar inserindo registros? (sim)")
        continuar = await input();
      
    } while (continuar == "sim" && i < 5)

    if (i==5)    
    {
    console.log("\n Agenda está cheia! \n") 
    }

    for (let j=0; j<i; j++){
          console.log(agenda[j]);
    }    

})();